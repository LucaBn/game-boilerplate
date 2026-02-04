import { Navigate, Route, Routes } from "react-router-dom";

import { MainMenu } from "@/pages/MainMenu";

import { AppLayout } from "./layouts/App/AppLayout";
import { GameLayout } from "./layouts/Game/GameLayout";
import { LanguageLayout } from "./layouts/LanguageLayout";
import { RootRedirect } from "./RootRedirect";
import { RouteGuard } from "./routing/RouteGuard";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />

      <Route path="/:language" element={<LanguageLayout />}>
        <Route element={<AppLayout />}>
          <Route index element={<MainMenu />} />

          <Route
            path="load-game"
            element={
              <RouteGuard requireAnySave>
                <p>Load Game Page</p>
              </RouteGuard>
            }
          />

          <Route path="options" element={<p>Options Page</p>} />
          <Route path="credits" element={<p>Credits Page</p>} />

          <Route
            path="game"
            element={
              <RouteGuard requireGameStarted>
                <GameLayout />
              </RouteGuard>
            }
          >
            <Route index element={<p>Game Overview</p>} />
            <Route path="link-one" element={<p>Link One Page</p>} />
            <Route path="link-two" element={<p>Link Two Page</p>} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
