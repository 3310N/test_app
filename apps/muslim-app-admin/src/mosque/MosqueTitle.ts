import { Mosque as TMosque } from "../api/mosque/Mosque";

export const MOSQUE_TITLE_FIELD = "imamName";

export const MosqueTitle = (record: TMosque): string => {
  return record.imamName?.toString() || String(record.id);
};
