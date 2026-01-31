import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

export function RootRedirect() {
  const { i18n } = useTranslation();
  const language = i18n?.language || "en";
  return <Navigate to={`/${language}`} replace />;
}
