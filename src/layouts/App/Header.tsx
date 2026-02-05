import {
  Button,
  Group,
  Image,
  Paper,
  Select,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { APP_NAME } from "@/constants/app";
import { ThemeList } from "@/constants/themes";
import { LanguageList } from "@/typings/i18next";

import styles from "./Header.module.scss";

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { i18n, t } = useTranslation("common");
  const navigate = useNavigate();

  const isDark = colorScheme === ThemeList.Dark;
  const currentLang = i18n.language as keyof typeof LanguageList;

  const handleLanguageChange = (lang: string | null) => {
    if (!lang || lang === currentLang) return;

    const newPath = location.pathname.replace(`/${currentLang}`, `/${lang}`);
    i18n.changeLanguage(lang);
    navigate(newPath, { replace: true });
  };

  return (
    <Paper component="header" px="md" withBorder className={styles.header}>
      <Group component="nav" className={styles.headerNav}>
        <Group>
          <Image src="/icon.svg" alt={APP_NAME} />
          <Title order={3}>{APP_NAME}</Title>
        </Group>

        <Group>
          <Button
            variant="light"
            onClick={toggleColorScheme}
            aria-label={t("header.button.toggleColorTheme")}
          >
            {isDark ? "🌙 Dark" : "🌞 Light"}
          </Button>

          <Select
            value={currentLang}
            onChange={handleLanguageChange}
            data={[
              { value: LanguageList.En, label: "English" },
              { value: LanguageList.It, label: "Italiano" },
            ]}
            variant="filled"
            size="sm"
            className={styles.languageSelect}
          />
        </Group>
      </Group>
    </Paper>
  );
};
