import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../pages/app/AppLayout";
import { routePaths } from "./paths.routes";
import { HomeScreen } from "../pages/home/HomeScreen";

export const routes = (
  <BrowserRouter>
    <Routes>
      <Route
        path={routePaths.home}
        element={<AppLayout page={HomeScreen} />}
      />
    </Routes>
  </BrowserRouter>
);
