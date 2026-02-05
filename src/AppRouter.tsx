import { Navigate, Route, Routes } from "react-router-dom";

import { AppLayout } from "@/layouts/App";
import { GameLayout } from "@/layouts/Game";
import { LanguageLayout } from "@/layouts/Language";
import { Credits } from "@/pages/Credits";
import { GameOverview } from "@/pages/GameOverview";
import { LoadGame } from "@/pages/LoadGame";
import { MainMenu } from "@/pages/MainMenu";
import { Options } from "@/pages/Options";
import { RootRedirect } from "@/routing";
import { RouteGuard } from "@/routing";

export const AppRouter = () => {
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
                <LoadGame />
              </RouteGuard>
            }
          />

          <Route path="options" element={<Options />} />
          <Route path="credits" element={<Credits />} />

          <Route
            path="game"
            element={
              <RouteGuard requireGameStarted>
                <GameLayout />
              </RouteGuard>
            }
          >
            <Route index element={<GameOverview />} />
            <Route path="link-one" element={<p>Link One Page</p>} />
            <Route path="link-two" element={<p>Link Two Page</p>} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
