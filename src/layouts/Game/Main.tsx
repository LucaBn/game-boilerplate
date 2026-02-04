import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

import styles from "./Main.module.scss";

export function Main() {
  return (
    <Box component="main" className={styles.main} p="md">
      <Outlet />
    </Box>
  );
}
