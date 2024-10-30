import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { Toaster } from "./components/ui/toaster.tsx";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
