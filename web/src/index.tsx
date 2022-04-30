import ReactDOM from "react-dom/client";
import { App } from "./pages/app/App";
import { AppProviders } from "./pages/app/AppProviders";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppProviders>
    <App />
  </AppProviders>
);
