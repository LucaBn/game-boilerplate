import { createContext } from "react";

export interface GameState {
  hasAnySave: boolean;
  gameStarted: boolean;
  activeSaveId: string | null;

  startNewGame: () => void;
  continueLastGame: () => void;
}

export const GameContext = createContext<GameState | null>(null);
