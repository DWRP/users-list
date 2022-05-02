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
  nat?: string;
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
  incParams: UserTypes[] = [], 
  page?: number,
  offset?: number,
  natParams: UserTypes[] = [], 
): RandomUserParams => {
  const reduceIncParams = incParams.reduce(
    (currentParam, nextParam) => currentParam && `${currentParam},${nextParam}`,
    ""
  );
  
  const reduceNatParams = incParams.reduce(
    (currentParam, nextParam) => currentParam && `${currentParam},${nextParam}`,
    ""
  );
  return {
    inc: reduceIncParams || "",
    page,
    results: offset,
    nat: reduceNatParams || ""
  };
};
