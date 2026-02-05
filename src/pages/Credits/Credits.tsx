import { useTranslation } from "react-i18next";
// import styles from "./Credits.module.scss";

export const Credits = () => {
  const { t } = useTranslation("common");
  return <p>{t("mainMenu.credits")}</p>;
};
