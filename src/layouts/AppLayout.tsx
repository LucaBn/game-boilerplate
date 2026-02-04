import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/Header";

import styles from "./AppLayout.module.scss";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container className={styles.appContainer} fluid>
        <Outlet />
      </Container>
    </>
  );
};
