import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvideer } from "next-themes";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <NextThemesProvideer
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "modern"]}
      >
        <Provider store={store}>
          <RouterProvider router={appRouter} />
        </Provider>
      </NextThemesProvideer>
    </NextUIProvider>
  </React.StrictMode>
);
