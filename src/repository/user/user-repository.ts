import prisma from "../../utils/prisma";

export const getUser = async () => {
  return await prisma.user.findMany();
};
