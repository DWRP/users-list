import { User } from "../entity/User";

type UserTypes =
  | "gender"
  | "name"
  | "location"
  | "email"
  | "login"
  | "registered"
  | "dob"
  | "phone"
  | "cell"
  | "id"
  | "picture"
  | "nat";

export type RandomUserParams = {
  inc?: string;
  page?: number;
  results?: number;
};

export type RandomUserDTO = {
  results: User[];
  info: Partial<{
    seed: string;
    results: number;
    page: number;
    version: string;
  }>;
};

export const getDtoParams = (
  useThisParams: UserTypes[] = [],
  page?: number,
  offset?: number
): RandomUserParams => {
  const reduceParams = useThisParams.reduce(
    (currentParam, nextParam) => `${currentParam},${nextParam}`,
    ""
  );
  return {
    inc: reduceParams || "",
    page,
    results: offset,
  };
};
