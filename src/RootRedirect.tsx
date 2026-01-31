import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import { DEFAULT_LANGUAGE } from "@/constants/languages";

export function RootRedirect() {
  const { i18n } = useTranslation();

  const language = i18n.language || DEFAULT_LANGUAGE;
  return <Navigate to={`/${language}`} replace />;
}
