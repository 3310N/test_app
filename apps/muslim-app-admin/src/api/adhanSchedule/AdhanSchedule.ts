import { JsonValue } from "type-fest";

export type AdhanSchedule = {
  createdAt: Date;
  id: string;
  location: JsonValue;
  time: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
