import { InputJsonValue } from "../../types";

export type MosqueCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  imamName?: string | null;
  location?: InputJsonValue;
  name?: string | null;
};
