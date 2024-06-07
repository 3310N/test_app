import { SortOrder } from "../../util/SortOrder";

export type PrayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  prayerName?: SortOrder;
  prayerTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
