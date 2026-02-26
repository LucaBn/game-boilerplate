import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Burger,
  Button,
  Group,
  Image,
  Modal,
  Paper,
  Select,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { APP_NAME } from "@/constants/app";
import { ThemeList } from "@/constants/themes";
import { LanguageList } from "@/typings/i18next";

import styles from "./Header.module.scss";

const NavbarButtons = () => {
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
    <>
      <Button
        variant="light"
        onClick={toggleColorScheme}
        aria-label={t("general.toggleColorTheme")}
      >
        {isDark
          ? `🌙 ${t("general.theme.dark")}`
          : `🌞 ${t("general.theme.light")}`}
      </Button>
      <Select
        value={currentLang}
        onChange={handleLanguageChange}
        data={[
          { value: LanguageList.En, label: t("general.language.en") },
          { value: LanguageList.It, label: t("general.language.it") },
        ]}
        variant="filled"
        size="sm"
        className={styles.languageSelect}
        aria-label={t("general.toggleLanguage")}
      />
    </>
  );
};

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { t } = useTranslation("common");

  return (
    <Paper component="header" px="md" withBorder className={styles.header}>
      <Group
        component="nav"
        justify="space-between"
        align="center"
        wrap="nowrap"
        h="100%"
        w="100%"
      >
        <Group>
          <Image src="/icon.svg" alt={APP_NAME} />
          <Title order={3}>{APP_NAME}</Title>
        </Group>

        <Group visibleFrom="sm">
          <NavbarButtons />
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          hiddenFrom="sm"
          aria-label={t("general.toggleNavbar")}
        />
        <Modal hiddenFrom="sm" opened={opened} onClose={toggle}>
          <Stack display="flex" gap="md">
            <NavbarButtons />
          </Stack>
        </Modal>
      </Group>
    </Paper>
  );
};
