import { Adkar as TAdkar } from "../api/adkar/Adkar";

export const ADKAR_TITLE_FIELD = "name";

export const AdkarTitle = (record: TAdkar): string => {
  return record.name?.toString() || String(record.id);
};
