import { Prayer as TPrayer } from "../api/prayer/Prayer";

export const PRAYER_TITLE_FIELD = "prayerName";

export const PrayerTitle = (record: TPrayer): string => {
  return record.prayerName?.toString() || String(record.id);
};
