import { Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { User } from "../../../utils/models/entity/User";

interface HomeViewProps {
  users?: User[];
  dataGridColumns?: GridColDef[];
  pageState: {
    currentPage: number;
    pageSize: number;
  }
  defineNewPageSize: (size: number) => void
  isRefetching: boolean;
}

export const HomeView = (props: HomeViewProps) => {
  const { users, dataGridColumns, pageState, defineNewPageSize, isRefetching } = props;
  return (
    <Grid height="100vh">
      <DataGrid
        rows={users || []}
        columns={dataGridColumns || []}
        page={pageState.currentPage}
        pageSize={pageState.pageSize}
        paginationMode="server"
        onPageSizeChange={defineNewPageSize}
        rowsPerPageOptions={[10, 25, 50, 100]}
        loading={isRefetching}
        autoHeight
      />
    </Grid>
  );
};
