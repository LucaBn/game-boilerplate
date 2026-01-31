import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { DEFAULT_LANGUAGE } from "@/constants/languages";
import { LanguageList } from "@/typings/i18next";

export function LanguageLayout() {
  const { language } = useParams<{ language: string }>();
  const { i18n } = useTranslation();

  const supportedLanguages = Object.values(LanguageList);
  const isValidLanguage =
    language && supportedLanguages.includes(language as LanguageList);

  useEffect(() => {
    if (isValidLanguage && i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, isValidLanguage]);

  if (!isValidLanguage) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return <Outlet />;
}
