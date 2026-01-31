import {
  Button,
  Group,
  Paper,
  Select,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ThemeList } from "@/constants/themes";
import { LanguageList } from "@/typings/i18next";

export function Header() {
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
    <Paper
      px="md"
      py="sm"
      withBorder
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Group style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Title order={3}>{t("header.title")}</Title>

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
            style={{ minWidth: 100 }}
          />
        </Group>
      </Group>
    </Paper>
  );
}
