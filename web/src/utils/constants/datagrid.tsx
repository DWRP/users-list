import { GridColDef } from "@mui/x-data-grid";
import { User } from "../models/entity/User";
import { v4 as UUID } from "uuid";
import { Avatar } from "@mui/material";

const translateUserGender = (text: string) => {
  switch (text){
    case "male":
      return "Masculino";
    case "female":
      return "Feminino";
    default:
      return text;
  }
} 

const convertUserNat = (text: string) => {
  switch (text){
    case "AU":
      return "Austrália";
    case "BR":
      return "Brasil";
    case "CA":
      return "Canadá";
    case "CH":
      return "Suíça";
    case "DE":
      return "Alemanha";
    case "DK":
      return "Dinamarca";
    case "ES":
      return "Espanha";
    case "FI":
      return "Finlândia";
    case "FR":
      return "França";
    case "GB":
      return "Reino Unido";
    case "IE":
      return "Irlanda";
    case "IR":
      return "Irã";
    case "NO":
      return "Noruega";
    case "NL":
      return "Holanda";
    case "NZ":
      return "Nova Zelândia";
    case "TR":
      return "Turquia";
    case "US":
      return "Estados Unidos";
    default:
      return text;
  }
} 

export const remapingUserInfos = (user: User) => {
  return {
    ...user,
    id: `${UUID()}`,
    name:
      typeof user.name !== "string"
        ? `${user.name.first} ${user.name.last}`
        : "",
  };
};

export const DATAGRID_USERS_COLUMNS: GridColDef[] = [
  {
    headerName: "Avatar",
    field: "picture",
    renderCell: ({value: image}) => <Avatar src={image.thumbnail} />,
    flex: 1,
    maxWidth: 100,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true
  },
  {
    field: "name",
    headerName: "Nome do usuário",
    flex: 1,
    disableColumnMenu: true
  },
  {
    field: "gender",
    headerName: "Gênero",
    valueGetter: ({value: gender}) => translateUserGender(gender),
    flex: 1,
    disableColumnMenu: true
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    disableColumnMenu: true
  },
  {
    field: "phone",
    headerName: "Telefone",
    flex: 1,
    disableColumnMenu: true,
    hide: true
  },
  {
    field: "cell",
    headerName: "Celular",
    flex: 1,
    disableColumnMenu: true
  },
  {
    field: "dob",
    headerName: "Idade",
    valueGetter: ({value}) => `${value.age} anos`,
    flex: 1,
    disableColumnMenu: true
  },
  {
    field: "location",
    headerName: "Endereço",
    valueGetter: ({value}) => `${value.street} -${value.city}/${value.state} - CEP: ${value.postcode}`,
    flex: 1,
    disableColumnMenu: true,
    hide: true
  },
  {
    field: "nat",
    headerName: "Nacionalidade",
    valueGetter: ({value: nat}) => convertUserNat(nat).toUpperCase(),
    flex: 1,
    disableColumnMenu: true
  },
];
