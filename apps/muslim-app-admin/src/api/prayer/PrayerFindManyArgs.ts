import { PrayerWhereInput } from "./PrayerWhereInput";
import { PrayerOrderByInput } from "./PrayerOrderByInput";

export type PrayerFindManyArgs = {
  where?: PrayerWhereInput;
  orderBy?: Array<PrayerOrderByInput>;
  skip?: number;
  take?: number;
};
