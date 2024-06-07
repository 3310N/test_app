import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MosqueServiceBase } from "./base/mosque.service.base";

@Injectable()
export class MosqueService extends MosqueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
