import { User } from "../user/User";

export type Prayer = {
  createdAt: Date;
  id: string;
  prayerName?: "Option1" | null;
  prayerTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
