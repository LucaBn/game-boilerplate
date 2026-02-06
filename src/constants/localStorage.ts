import { LAST_SAVE_KEY, NEXT_SAVE_ID_KEY, SAVES_KEY } from "./game";

export const LS_KEY_LIST = {
  SAVES: SAVES_KEY,
  LAST_SAVE_ID: LAST_SAVE_KEY,
  NEXT_SAVE_ID: NEXT_SAVE_ID_KEY,
} as const;

export type LocalStorageKey = (typeof LS_KEY_LIST)[keyof typeof LS_KEY_LIST];
