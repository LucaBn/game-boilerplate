import { AppShell, Box, NavLink as MantineNavLink, Stack } from "@mantine/core";
import { NavLink, Outlet } from "react-router-dom";

export function GameLayout() {
  return (
    <AppShell padding="md">
      <Box
        style={{
          display: "flex",
          height: "100dvh",
        }}
      >
        <Box
          style={{
            width: 200,
            borderRight: "1px solid #eee",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <Stack gap="sm">
            <MantineNavLink component={NavLink} end to="" label="Overview" />
            <MantineNavLink
              component={NavLink}
              to="link-one"
              label="Link One"
            />
            <MantineNavLink
              component={NavLink}
              to="link-two"
              label="Link Two"
            />
          </Stack>
        </Box>

        <Box
          style={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </AppShell>
  );
}
