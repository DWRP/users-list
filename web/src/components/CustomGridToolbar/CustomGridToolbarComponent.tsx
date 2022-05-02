import { Search, ViewColumn } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState, MouseEvent } from "react";

interface CustomGridToolbarProps {
  menuItems: GridColDef[];
  handleAction: (id: string, hide: boolean) => void;
  searchText: (text: string) => void;
  search: string;
}

export const CustomGridToolbarComponent = ({
  menuItems,
  handleAction,
  search,
  searchText
}: CustomGridToolbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen(true)
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null)
  };

  return (
    <Container maxWidth="xl">
      <Grid
        mt={2}
        mb={2}
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            placeholder="Procurar"
            fullWidth
            autoFocus
            value={search}
            onChange={({target:{value: text}})=>searchText(text)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid container item xs sm={4} md={4} justifyContent="flex-end">
          <Button
            id="columns-button"
            // aria-controls={open ? undefined : undefined}
            // aria-haspopup="true"
            // aria-expanded={open ? undefined : undefined}
            onClick={handleClick}
          >
            <ViewColumn />
            <Typography>Colunas</Typography>
          </Button>
          <Menu
            id="columns-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "columns-button",
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.field} onClick={() => handleAction(item.field, !item.hide)}>
                <Switch
                  checked={!item.hide}
                  onClick={() => handleAction(item.field, !item.hide)}
                />
                {item.headerName}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </Container>
  );
};
