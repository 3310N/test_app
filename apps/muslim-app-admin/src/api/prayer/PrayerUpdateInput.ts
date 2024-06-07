import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrayerUpdateInput = {
  prayerName?: "Option1" | null;
  prayerTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
