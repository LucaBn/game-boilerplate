import { useTranslation } from "react-i18next";
// import styles from "./Options.module.scss";

export const Options = () => {
  const { t } = useTranslation("common");
  return <p>{t("mainMenu.options")}</p>;
};
