import { AppShell, Box, NavLink as MantineNavLink, Stack } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./GameLayout.module.scss";

export function GameLayout() {
  return (
    <AppShell className={styles.gameContainer}>
      <Box component="aside" className={styles.sidebar} p="md">
        <Stack gap="sm">
          <MantineNavLink component={NavLink} end to="" label="Overview" />
          <MantineNavLink component={NavLink} to="link-one" label="Link One" />
          <MantineNavLink component={NavLink} to="link-two" label="Link Two" />
        </Stack>
      </Box>
      <Box component="main" className={styles.main} p="md">
        <Outlet />
      </Box>
    </AppShell>
  );
}
