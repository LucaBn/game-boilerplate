import { Button, Container, Stack, Title } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

import { APP_NAME } from "@/constants/app";
import { useGame } from "@/hooks/useGame";

import styles from "./MainMenu.module.scss";

export const MainMenu: React.FC = () => {
  const { hasAnySave, startNewGame, continueLastGame } = useGame();
  const { language } = useParams();
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Stack
        justify="center"
        align="center"
        className={styles.mainMenu}
        gap="md"
      >
        <Title order={1} ta="center">
          {APP_NAME}
        </Title>

        <Stack w="100%" gap="sm">
          {hasAnySave && (
            <>
              <Button
                fullWidth
                onClick={() => {
                  continueLastGame();
                  navigate(`/${language}/game`);
                }}
              >
                Continue last game
              </Button>

              <Button
                fullWidth
                onClick={() => navigate(`/${language}/load-game`)}
              >
                Load game
              </Button>
            </>
          )}

          <Button
            fullWidth
            onClick={() => {
              startNewGame();
              navigate(`/${language}/game`);
            }}
          >
            New game
          </Button>

          <Button fullWidth onClick={() => navigate(`/${language}/options`)}>
            Options
          </Button>

          <Button fullWidth onClick={() => navigate(`/${language}/credits`)}>
            Credits
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
