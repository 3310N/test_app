import { Prayer } from "../prayer/Prayer";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  prayers?: Array<Prayer>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
