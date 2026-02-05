import { LocalStorageKey, LS_KEY_LIST } from "@/constants/localStorage";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "@/utils/localStorage";

function readArray(key: LocalStorageKey): string[] {
  return readFromLocalStorage<string[]>(key) ?? [];
}

function writeArray(key: LocalStorageKey, arr: string[]): void {
  writeToLocalStorage(key, arr);
}

export function getAllSaveIds(): string[] {
  return readArray(LS_KEY_LIST.SAVES);
}

export function hasAnySave(): boolean {
  return getAllSaveIds().length > 0;
}

export function getLastSaveId(): string | null {
  return readFromLocalStorage<string>(LS_KEY_LIST.LAST_SAVE_ID);
}

export function getNextSaveId(): string {
  return readFromLocalStorage<string>(LS_KEY_LIST.NEXT_SAVE_ID) ?? "1";
}

export function incrementNextSaveId(currentId: string): void {
  const next = Number(currentId) + 1;
  writeToLocalStorage(LS_KEY_LIST.NEXT_SAVE_ID, String(next));
}

export function createNewSave(): string {
  const id = getNextSaveId();

  const saves = getAllSaveIds();
  saves.push(id);
  writeArray(LS_KEY_LIST.SAVES, saves);

  writeToLocalStorage(LS_KEY_LIST.LAST_SAVE_ID, id);
  incrementNextSaveId(id);

  return id;
}

export function deleteSave(id: string): void {
  const saves = getAllSaveIds().filter((s) => s !== id);
  writeArray(LS_KEY_LIST.SAVES, saves);

  const lastSave = getLastSaveId();
  if (lastSave === id) {
    writeToLocalStorage(
      LS_KEY_LIST.LAST_SAVE_ID,
      saves[saves.length - 1] ?? null,
    );
  }
}
