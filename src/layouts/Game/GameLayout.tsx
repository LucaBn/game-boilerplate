import { AppShell } from "@mantine/core";

import { Main } from "@/layouts/Game";
import { Sidebar } from "@/layouts/Game";

import styles from "./GameLayout.module.scss";

export const GameLayout = () => {
  return (
    <AppShell className={styles.gameContainer}>
      <Sidebar />
      <Main />
    </AppShell>
  );
};
