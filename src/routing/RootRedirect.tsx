import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

export const RootRedirect: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n?.language || "en";
  return <Navigate to={`/${language}`} replace />;
};
