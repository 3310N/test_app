import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdkarServiceBase } from "./base/adkar.service.base";

@Injectable()
export class AdkarService extends AdkarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
