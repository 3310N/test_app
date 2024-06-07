import { PrayerCreateNestedManyWithoutUsersInput } from "./PrayerCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  prayers?: PrayerCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
