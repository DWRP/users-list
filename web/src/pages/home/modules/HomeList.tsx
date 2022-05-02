import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomGridToolbarComponent } from "../../../components/CustomGridToolbar/CustomGridToolbarComponent";
import { User } from "../../../utils/models/entity/User";

interface HomeListProps {
  users?: User[];
  search: string;
  searchText: (text: string) => void;
  dataGridColumns: GridColDef[];
  pageState: {
    currentPage: number;
  };
  isRefetching: boolean;
  onClickNextPage: (page: number) => void;
  showOrHideGridColumns: (field: string, hide: boolean) => void;
}

export const HomeList = (props: HomeListProps) => {
  const {
    users,
    dataGridColumns,
    pageState,
    onClickNextPage,
    showOrHideGridColumns,
    isRefetching,
    search,
    searchText,
  } = props;

  return (
    <Box height={400}>
      <CustomGridToolbarComponent
        menuItems={dataGridColumns}
        handleAction={showOrHideGridColumns}
        search={search}
        searchText={searchText}
      />
      
      <DataGrid
        rows={users || []}
        columns={dataGridColumns}
        page={pageState.currentPage}
        onPageChange={onClickNextPage}
        pageSize={10}
        loading={isRefetching}
        disableSelectionOnClick
        autoHeight
        pagination
        components={{
          NoRowsOverlay: () => (
            <Grid container alignItems="center" justifyContent="center">
              <Typography>Sem resultados!</Typography>
            </Grid>
          ),
        }}
      />
      )
    </Box>
  );
};
