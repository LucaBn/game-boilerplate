import { ReactNode, useEffect, useState } from "react";

import { GameContext } from "@/context/GameContext";

import { LAST_SAVE_KEY, SAVES_KEY } from "../constants/game";
interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [activeSaveId, setActiveSaveId] = useState<string | null>(null);
  const [hasAnySave, setHasAnySave] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(SAVES_KEY);
    const saves: string[] = raw ? JSON.parse(raw) : [];
    setHasAnySave(saves.length > 0);
  }, []);

  function startNewGame() {
    const id = `${crypto.randomUUID()}-${Date.now()}`;

    const raw = localStorage.getItem(SAVES_KEY);
    const saves: string[] = raw ? JSON.parse(raw) : [];

    saves.push(id);

    localStorage.setItem(SAVES_KEY, JSON.stringify(saves));
    localStorage.setItem(LAST_SAVE_KEY, id);

    setHasAnySave(true);
    setActiveSaveId(id);
  }

  function continueLastGame() {
    const id = localStorage.getItem(LAST_SAVE_KEY);
    if (id) {
      setActiveSaveId(id);
    }
  }

  return (
    <GameContext.Provider
      value={{
        hasAnySave,
        activeSaveId,
        gameStarted: activeSaveId !== null,
        startNewGame,
        continueLastGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
