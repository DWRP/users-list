import { CircularProgress } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState, useTransition } from "react";
import { useQuery } from "react-query";
import { RandomUserDTO } from "../../utils/models/dtos/randomUserParams";
import { listUsers } from "../../utils/services/users.service";
import { HomeList } from "./modules/HomeList";

import {
  DATAGRID_USERS_COLUMNS,
  remapingUserInfos,
} from "../../utils/constants/datagrid";
import { User } from "../../utils/models/entity/User";

export const HomeScreen = () => {

  const [isPending, startTransition] = useTransition()

  const [dataGridColumns, setDataGridColumns] = useState<GridColDef[]>(
    DATAGRID_USERS_COLUMNS
  );
  const [pageState, setPageState] = useState({
    currentPage: 0,
  });

  const [search, setSearch] = useState<string>('')
  const [usersOnSearch, setUsersOnSearch] = useState<User[]>()

  const {
    data: users,
    isLoading,
    isRefetching,
  } = useQuery<RandomUserDTO>("users", async () => await listUsers(), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const usersMapped = users?.results.map(remapingUserInfos);

  const nextPage = (page: number) =>
    setPageState({ ...pageState, currentPage: page });

  const showOrHideGridColumns = (field: string, hide: boolean) => {
    const filtredColumn: GridColDef[] = dataGridColumns.map((column) => {
      if (column.field === field) {
        return {
          ...column,
          hide,
        };
      }
      return column;
    });

    setDataGridColumns(filtredColumn);
  };

  const searchText = (text: string) => {
    setSearch(text)
    startTransition(() => {
      const usersFiltreded = users?.results.filter(user => JSON.stringify(user).includes(text))
      if(!isPending && usersFiltreded){
        setUsersOnSearch(usersFiltreded.map(remapingUserInfos))
      }
    })
  }

  if (isLoading || isRefetching) {
    <CircularProgress size={50} />;
  }

  return (
    <HomeList
      users={usersOnSearch || usersMapped}
      dataGridColumns={dataGridColumns}
      pageState={pageState}
      isRefetching={isRefetching}
      onClickNextPage={nextPage}
      showOrHideGridColumns={showOrHideGridColumns}
      search={search}
      searchText={searchText}
    />
  );
};
