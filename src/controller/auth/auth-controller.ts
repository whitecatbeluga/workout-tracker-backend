import { Request, Response } from "express";
import { authLoginSchema } from "../../utils/validation/auth-validation";
import prisma from "../../utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ms from "ms";
import { authRegisterSchema } from "../../utils/validation/auth-register-validation";
import {
  generateRefreshToken,
  generateToken,
} from "../../utils/generate-token";
import { ValidationError } from "yup";
import CustomError from "../../utils/custom-error";
import { UserType } from "../../types/user-type";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (process.env.DEV === "TRUE") {
      await authLoginSchema.validate(
        {
          email,
          password,
        },
        { abortEarly: false }
      );
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user && password !== "") {
        const access_token = generateToken(user);
        const refresh_token = generateRefreshToken(user);

        res.cookie("authToken", refresh_token, {
          httpOnly: true,
          maxAge: ms("1h"),
          secure: true,
          sameSite: "none",
        });

        return res.status(200).json({
          message: "Logged in successfully (Dev Environment)",
          access_token,
          user: { ...user, password: undefined },
        });
      } else {
        return res.status(400).json({ message: "Invalid email or password" });
      }
    }

    await authLoginSchema.validate(
      {
        email,
        password,
      },
      { abortEarly: false }
    );

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (user == null) {
      return res.status(404).json({ message: "User not found." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Password is wrong." });
    }

    const access_token = generateToken(user);
    const refresh_token = generateRefreshToken(user);

    res.cookie("authToken", refresh_token, {
      httpOnly: true,
      maxAge: ms("1h"),
      secure: true,
      sameSite: "none",
    });

    const decodedToken = jwt.decode(access_token) as jwt.JwtPayload;

    if (!decodedToken || !decodedToken.id) {
      return res.status(400).json({ message: "Invalid token." });
    }

    return res.status(200).json({
      message: "Login successfully",
      access_token,
      user: { ...user, password: undefined },
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.inner.map((err) => err.message), // Gather all error messages
      });
    }

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      user_name,
      first_name,
      last_name,
      address,
      gender,
      age,
      height,
      weight,
      bmi,
      activity_level,
      user_type,
    } = req.body;

    await authRegisterSchema.validate(
      {
        email,
        password,
        user_name,
        first_name,
        last_name,
        age,
        address,
        gender,
        height,
        weight,
        bmi,
        activity_level,
        user_type,
      },
      { abortEarly: true }
    );

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        first_name,
        last_name,
        user_name,
        age,
        address,
        gender,
        height,
        weight,
        bmi,
        activity_level,
        user_type,
      },
    });
    return res.status(201).json({
      message: "User created successfully.",
      user: { ...newUser, password: undefined },
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.inner.map((err) => err.message), // Gather all error messages
      });
    }

    if (error instanceof CustomError) {
      return res.status(error.status).json({ message: error.message });
    }

    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.cookie("authToken", "none", {
      httpOnly: true,
      maxAge: 0,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({ message: "Logout successfully." });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const cookie = req.cookies;
  if (cookie.authToken === undefined) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  jwt.verify(
    cookie.authToken,
    process.env.SECRET_TOKEN as string,
    async (error: unknown, decoded: unknown) => {
      if (error != null) return res.status(403).json({ message: "Forbidden" });
      const decodedToken = decoded as UserType;
      const user = await prisma.user.findFirst({
        where: {
          email: decodedToken.email,
        },
      });

      if (user == null) {
        return res.status(400).json({ message: "User not found." });
      }
      const access_token = generateRefreshToken(user);

      res.json({
        access_token,
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          address: user.address,
          user_name: user.user_name,
          gender: user.gender,
          age: user.age,
          height: user.height,
          weight: user.weight,
          bmi: user.bmi,
          activity_level: user.activity_level,
          user_type: user.user_type,
        },
      });
    }
  );
};
