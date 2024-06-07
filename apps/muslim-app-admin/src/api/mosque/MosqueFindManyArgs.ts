import { MosqueWhereInput } from "./MosqueWhereInput";
import { MosqueOrderByInput } from "./MosqueOrderByInput";

export type MosqueFindManyArgs = {
  where?: MosqueWhereInput;
  orderBy?: Array<MosqueOrderByInput>;
  skip?: number;
  take?: number;
};
