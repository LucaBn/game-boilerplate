import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";

import styles from "./Main.module.scss";

export const Main: React.FC = () => {
  return (
    <Box component="main" className={styles.main} p="md">
      <Outlet />
    </Box>
  );
};
