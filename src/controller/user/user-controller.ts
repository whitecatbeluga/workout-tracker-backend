import { type Request, type Response } from "express";

import * as UserService from "../../service/user/user-service";

export async function getUser(req: Request, res: Response) {
  const user = await UserService.getUser();
  return res.json(user);
}
