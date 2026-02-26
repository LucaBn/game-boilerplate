import { useTranslation } from "react-i18next";

// import styles from "./LoadGame.module.scss";

export const LoadGame = () => {
  const { t } = useTranslation("common");
  return <p>{t("mainMenu.loadGame")}</p>;
};
