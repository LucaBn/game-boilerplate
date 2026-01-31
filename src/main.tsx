import "@/i18n";
import "@/styles/index.scss";
import "@mantine/core/styles.css";

import { localStorageColorSchemeManager, MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GameProvider } from "./providers/GameProvider";

const colorSchemeManager = localStorageColorSchemeManager();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider
        defaultColorScheme="light"
        colorSchemeManager={colorSchemeManager}
      >
        <GameProvider>
          <App />
        </GameProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
