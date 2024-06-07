import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AdhanScheduleWhereInput = {
  id?: StringFilter;
  location?: JsonFilter;
  time?: DateTimeNullableFilter;
  typeField?: "Option1";
};
