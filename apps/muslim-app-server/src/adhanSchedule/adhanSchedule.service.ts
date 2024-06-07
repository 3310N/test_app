import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdhanScheduleServiceBase } from "./base/adhanSchedule.service.base";

@Injectable()
export class AdhanScheduleService extends AdhanScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
