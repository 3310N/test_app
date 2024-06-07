import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrayerCreateInput = {
  prayerName?: "Option1" | null;
  prayerTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
