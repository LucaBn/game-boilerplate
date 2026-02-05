import { ReactNode, useEffect, useState } from "react";

import { GameContext } from "@/context/GameContext";
import {
  createNewSave,
  getLastSaveId,
  hasAnySave as hasAnySaveStorage,
} from "@/utils/game/gameStorage";

interface GameProviderProps {
  children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
  const [activeSaveId, setActiveSaveId] = useState<string | null>(null);
  const [hasAnySave, setHasAnySave] = useState(false);

  useEffect(() => {
    setHasAnySave(hasAnySaveStorage());
  }, []);

  function startNewGame() {
    const id = createNewSave();
    setActiveSaveId(id);
    setHasAnySave(true);
  }

  function continueLastGame() {
    const id = getLastSaveId();
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
}
