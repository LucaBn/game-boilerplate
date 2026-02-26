import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";

import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <Box component="main" className={styles.main} p="md">
      <Outlet />
    </Box>
  );
};
