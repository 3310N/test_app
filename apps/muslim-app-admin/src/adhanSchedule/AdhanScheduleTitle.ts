import { AdhanSchedule as TAdhanSchedule } from "../api/adhanSchedule/AdhanSchedule";

export const ADHANSCHEDULE_TITLE_FIELD = "id";

export const AdhanScheduleTitle = (record: TAdhanSchedule): string => {
  return record.id?.toString() || String(record.id);
};
