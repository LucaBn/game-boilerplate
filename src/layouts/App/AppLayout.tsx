import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { Header } from "@/layouts/App/Header";

import styles from "./AppLayout.module.scss";

export const AppLayout: React.FC = () => {
  return (
    <AppShell>
      <Header />
      <Container className={styles.appContainer} fluid>
        <Outlet />
      </Container>
    </AppShell>
  );
};
