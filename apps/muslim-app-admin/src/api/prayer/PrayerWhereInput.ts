import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrayerWhereInput = {
  id?: StringFilter;
  prayerName?: "Option1";
  prayerTime?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
