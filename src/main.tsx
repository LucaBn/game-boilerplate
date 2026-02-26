import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { localStorageColorSchemeManager, MantineProvider } from "@mantine/core";

import App from "@/App";
import { GameProvider } from "@/providers";

import "@/styles/index.scss";
import "@mantine/core/styles.css";

import "@/i18n";

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
