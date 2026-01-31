import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/layout/Header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: 72 }} fluid>
        <Outlet />
      </Container>
    </>
  );
};
