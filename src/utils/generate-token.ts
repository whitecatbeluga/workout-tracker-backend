import jwt from "jsonwebtoken";

interface UserTokenType {
  id: number;
  email: string;
}

export const generateToken = (user: UserTokenType) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_TOKEN as string,
    {
      expiresIn: "1h",
    }
  );
};

export const generateRefreshToken = (user: UserTokenType) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_TOKEN as string,
    {
      expiresIn: "1h",
    }
  );
};
