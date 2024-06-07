/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AdhanSchedule as PrismaAdhanSchedule } from "@prisma/client";

export class AdhanScheduleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AdhanScheduleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.adhanSchedule.count(args);
  }

  async adhanSchedules<T extends Prisma.AdhanScheduleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdhanScheduleFindManyArgs>
  ): Promise<PrismaAdhanSchedule[]> {
    return this.prisma.adhanSchedule.findMany<Prisma.AdhanScheduleFindManyArgs>(
      args
    );
  }
  async adhanSchedule<T extends Prisma.AdhanScheduleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdhanScheduleFindUniqueArgs>
  ): Promise<PrismaAdhanSchedule | null> {
    return this.prisma.adhanSchedule.findUnique(args);
  }
  async createAdhanSchedule<T extends Prisma.AdhanScheduleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdhanScheduleCreateArgs>
  ): Promise<PrismaAdhanSchedule> {
    return this.prisma.adhanSchedule.create<T>(args);
  }
  async updateAdhanSchedule<T extends Prisma.AdhanScheduleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdhanScheduleUpdateArgs>
  ): Promise<PrismaAdhanSchedule> {
    return this.prisma.adhanSchedule.update<T>(args);
  }
  async deleteAdhanSchedule<T extends Prisma.AdhanScheduleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdhanScheduleDeleteArgs>
  ): Promise<PrismaAdhanSchedule> {
    return this.prisma.adhanSchedule.delete(args);
  }
}
