import { Outlet } from "react-router-dom";
import { AppShell, Container } from "@mantine/core";

import { Header } from "@/layouts/App";

import styles from "./AppLayout.module.scss";

export const AppLayout = () => {
  return (
    <AppShell>
      <Header />
      <Container className={styles.appContainer} fluid>
        <Outlet />
      </Container>
    </AppShell>
  );
};
