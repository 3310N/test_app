import { InputJsonValue } from "../../types";

export type AdhanScheduleUpdateInput = {
  location?: InputJsonValue;
  time?: Date | null;
  typeField?: "Option1" | null;
};
