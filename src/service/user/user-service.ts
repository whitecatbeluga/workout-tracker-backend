import * as UserRepository from "../../repository/user/user-repository";

export const getUser = async () => {
  return await UserRepository.getUser();
};
