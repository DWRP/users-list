import { Grid } from "@mui/material";
import { HeaderComponent } from "../../components/Header/HeaderComponent";
import { LayoutComponet } from "../../components/Layout/LayoutComponent";

interface AppLayputProps {
  page: () => JSX.Element;
}

export const AppLayout = (props: AppLayputProps): JSX.Element => {
  const { page: Component, ...rest } = props;

  return (
    <LayoutComponet>
      <HeaderComponent />
      <Grid spacing={1}>
        <Component {...rest} />
      </Grid>
    </LayoutComponet>
  );
};
