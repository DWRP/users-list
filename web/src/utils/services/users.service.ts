import {
  getDtoParams,
  RandomUserDTO,
  RandomUserParams,
} from "../models/dtos/randomUserParams";
import { api } from "./api.service";

export const listUsers = async (
  paginated?: boolean,
  nextPage: number = 1,
  pageSize: number = 10
) => {
  const offset = paginated && nextPage ? pageSize : undefined;

  const params: RandomUserParams = getDtoParams(
    ["name", "gender", "email", "picture"],
    nextPage,
    offset
  );
  const { data: listOfUsers } = await api.get<RandomUserDTO>("", { params });
  return listOfUsers;
};
