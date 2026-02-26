import { NavLink } from "react-router-dom";
import { Box, NavLink as MantineNavLink, Stack } from "@mantine/core";

import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <Box component="aside" className={styles.sidebar} p="md">
      <Stack gap="sm">
        <MantineNavLink component={NavLink} end to="" label="Overview" />
        <MantineNavLink component={NavLink} to="link-one" label="Link One" />
        <MantineNavLink component={NavLink} to="link-two" label="Link Two" />
      </Stack>
    </Box>
  );
};
