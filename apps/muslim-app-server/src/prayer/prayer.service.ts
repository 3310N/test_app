import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrayerServiceBase } from "./base/prayer.service.base";

@Injectable()
export class PrayerService extends PrayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
