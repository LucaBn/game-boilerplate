import { useTranslation } from "react-i18next";

// import styles from "./GameOverview.module.scss";

export const GameOverview = () => {
  const { t } = useTranslation("common");
  return <p>{t("mainMenu.newGame")}</p>;
};
