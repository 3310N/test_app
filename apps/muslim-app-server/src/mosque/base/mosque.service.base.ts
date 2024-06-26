/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Mosque as PrismaMosque } from "@prisma/client";

export class MosqueServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MosqueCountArgs, "select">): Promise<number> {
    return this.prisma.mosque.count(args);
  }

  async mosques<T extends Prisma.MosqueFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MosqueFindManyArgs>
  ): Promise<PrismaMosque[]> {
    return this.prisma.mosque.findMany<Prisma.MosqueFindManyArgs>(args);
  }
  async mosque<T extends Prisma.MosqueFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MosqueFindUniqueArgs>
  ): Promise<PrismaMosque | null> {
    return this.prisma.mosque.findUnique(args);
  }
  async createMosque<T extends Prisma.MosqueCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MosqueCreateArgs>
  ): Promise<PrismaMosque> {
    return this.prisma.mosque.create<T>(args);
  }
  async updateMosque<T extends Prisma.MosqueUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MosqueUpdateArgs>
  ): Promise<PrismaMosque> {
    return this.prisma.mosque.update<T>(args);
  }
  async deleteMosque<T extends Prisma.MosqueDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MosqueDeleteArgs>
  ): Promise<PrismaMosque> {
    return this.prisma.mosque.delete(args);
  }
}
