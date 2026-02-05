import { APP_NAME_SHORT } from "@/constants/app";

const lowercaseAppName = APP_NAME_SHORT.toLowerCase();

export const LS_KEY_LIST = {
  SAVES: `${lowercaseAppName}:saves`,
  LAST_SAVE_ID: `${lowercaseAppName}:last-save-id`,
  NEXT_SAVE_ID: `${lowercaseAppName}:next-save-id`,
} as const;

export type LocalStorageKey = (typeof LS_KEY_LIST)[keyof typeof LS_KEY_LIST];
