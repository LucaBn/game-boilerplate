import { AppShell } from "@mantine/core";

import styles from "./GameLayout.module.scss";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

export const GameLayout: React.FC = () => {
  return (
    <AppShell className={styles.gameContainer}>
      <Sidebar />
      <Main />
    </AppShell>
  );
};
