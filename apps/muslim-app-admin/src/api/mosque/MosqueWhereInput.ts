import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MosqueWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  id?: StringFilter;
  imamName?: StringNullableFilter;
  location?: JsonFilter;
  name?: StringNullableFilter;
};
