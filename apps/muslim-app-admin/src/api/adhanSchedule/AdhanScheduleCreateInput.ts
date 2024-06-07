import { InputJsonValue } from "../../types";

export type AdhanScheduleCreateInput = {
  location?: InputJsonValue;
  time?: Date | null;
  typeField?: "Option1" | null;
};
