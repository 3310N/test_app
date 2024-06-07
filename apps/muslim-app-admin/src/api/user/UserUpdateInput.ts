import { PrayerUpdateManyWithoutUsersInput } from "./PrayerUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  prayers?: PrayerUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
