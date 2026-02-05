import { Button, Container, Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { APP_NAME } from "@/constants/app";
import { useGame } from "@/hooks";

import styles from "./MainMenu.module.scss";

export const MainMenu = () => {
  const { hasAnySave, startNewGame, continueLastGame } = useGame();
  const { language } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("common");

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
                {t("mainMenu.continue")}
              </Button>

              <Button
                fullWidth
                onClick={() => navigate(`/${language}/load-game`)}
              >
                {t("mainMenu.loadGame")}
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
            {t("mainMenu.newGame")}
          </Button>

          <Button fullWidth onClick={() => navigate(`/${language}/options`)}>
            {t("mainMenu.options")}
          </Button>

          <Button fullWidth onClick={() => navigate(`/${language}/credits`)}>
            {t("mainMenu.credits")}
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};
