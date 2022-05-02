import { GitHub } from "@mui/icons-material";
import { AppBar, Container, Grid, Typography } from "@mui/material";
import { Link } from "@mui/material";

export const HeaderComponent = () => {
  return (
    <AppBar position="static" color="secondary" enableColorOnDark>
      <Container maxWidth="xl">
        <Grid
          container
          height={72}
          justifyContent="space-between"
          alignItems="center"
          mt={1}
          spacing={2}
        >
          <Grid container item xs sm={4} md={4} justifyContent="center">
            <Typography variant="overline" fontSize="16pt" fontWeight="bold">
              User List{" "}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs
            sm={4}
            md={4}
            justifyContent="flex-end"
            mr={2}
          >
            <Link href="https://www.github.com/dwrp">
              <GitHub
                fontSize="large"
                titleAccess="Github"
                style={{ color: "white" }}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
