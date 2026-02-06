import { APP_NAME_SHORT } from "@/constants/app";

const lowercaseAppName: string = APP_NAME_SHORT.toLowerCase();

const LAST_SAVE_KEY = `${lowercaseAppName}:last-save`;
const NEXT_SAVE_ID_KEY = `${lowercaseAppName}:next-save-id`;
const SAVES_KEY = `${lowercaseAppName}:saves`;

export { LAST_SAVE_KEY, NEXT_SAVE_ID_KEY, SAVES_KEY };
