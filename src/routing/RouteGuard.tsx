import { ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";

import { useGame } from "@/hooks/useGame";

interface Props {
  requireGameStarted?: boolean;
  requireAnySave?: boolean;
  children: ReactNode;
}

export function RouteGuard({
  requireGameStarted,
  requireAnySave,
  children,
}: Props) {
  const { gameStarted, hasAnySave } = useGame();
  const { language } = useParams();

  if (requireGameStarted && !gameStarted) {
    return <Navigate to={`/${language}`} replace />;
  }

  if (requireAnySave && !hasAnySave) {
    return <Navigate to={`/${language}`} replace />;
  }

  return <>{children}</>;
}
