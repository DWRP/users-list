import { AccountCircleRounded } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useQuery } from "react-query";
import { RandomUserDTO } from "../../utils/models/dtos/randomUserParams";
import { User } from "../../utils/models/entity/User";
import { listUsers } from "../../utils/services/users.service";
import { HomeView } from "./modules/HomeView";
import { v4 as UUID } from "uuid";

export const HomeScreen = () => {
  const [pageState, setPageState] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  const fetchUsers = async (
    page: number,
    offset: number
  ): Promise<RandomUserDTO> => {
    const usersResponse = await listUsers(true, page, offset);
    setPageState({
      ...pageState,
      currentPage: usersResponse?.info.page || 1,
    });
    return usersResponse;
  };

  const {
    data: users,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery<RandomUserDTO>(
    ["users", pageState.currentPage, pageState.pageSize],
    () =>
      fetchUsers(pageState.currentPage, pageState.pageSize).then((res) => res),
    { keepPreviousData: true }
  );

  const defineNewPageSize = (size: number) => {
    setPageState({ ...pageState, pageSize: size });
    refetch();
  };

  const dataGridColumns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "customPicture",
      renderCell: () => <AccountCircleRounded />,
      width: 150,
    },
    {
      field: "name",
      headerName: "Nome do usuário",
      width: 150,
    },
    {
      field: "gender",
      headerName: "Gênero",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
  ];

  const returnUserMapped = (user: User) => {
    return {
      ...user,
      id: `${UUID()}`,
      name:
        typeof user.name !== "string"
          ? `${user.name.first} ${user.name.last}`
          : "",
    };
  };

  const usersMapped = users?.results.map(returnUserMapped);

  if (isLoading || isRefetching) {
    <CircularProgress size={50} />;
  }

  return (
    <HomeView
      users={usersMapped}
      dataGridColumns={dataGridColumns}
      pageState={pageState}
      defineNewPageSize={defineNewPageSize}
      isRefetching={isRefetching}
    />
  );
};
