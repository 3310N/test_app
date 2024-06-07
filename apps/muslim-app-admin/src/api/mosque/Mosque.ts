import { JsonValue } from "type-fest";

export type Mosque = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  id: string;
  imamName: string | null;
  location: JsonValue;
  name: string | null;
  updatedAt: Date;
};
