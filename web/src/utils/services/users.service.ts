import {
  getDtoParams,
  RandomUserDTO,
  RandomUserParams,
} from "../models/dtos/randomUserParams";
import { api } from "./api.service";

export const listUsers = async () => {
  const page = 1;
  const results = 500;

  const params: RandomUserParams = getDtoParams(
    ["picture", "name", "gender", "email","nat", "phone", "dob", "cell", "location"],
    page,
    results
  );
  const { data: listOfUsers } = await api.get<RandomUserDTO>("", { params });
  return listOfUsers;
};
