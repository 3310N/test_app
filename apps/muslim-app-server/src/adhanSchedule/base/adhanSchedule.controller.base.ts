/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AdhanScheduleService } from "../adhanSchedule.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdhanScheduleCreateInput } from "./AdhanScheduleCreateInput";
import { AdhanSchedule } from "./AdhanSchedule";
import { AdhanScheduleFindManyArgs } from "./AdhanScheduleFindManyArgs";
import { AdhanScheduleWhereUniqueInput } from "./AdhanScheduleWhereUniqueInput";
import { AdhanScheduleUpdateInput } from "./AdhanScheduleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdhanScheduleControllerBase {
  constructor(
    protected readonly service: AdhanScheduleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AdhanSchedule })
  @nestAccessControl.UseRoles({
    resource: "AdhanSchedule",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAdhanSchedule(
    @common.Body() data: AdhanScheduleCreateInput
  ): Promise<AdhanSchedule> {
    return await this.service.createAdhanSchedule({
      data: data,
      select: {
        createdAt: true,
        id: true,
        location: true,
        time: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AdhanSchedule] })
  @ApiNestedQuery(AdhanScheduleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AdhanSchedule",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async adhanSchedules(
    @common.Req() request: Request
  ): Promise<AdhanSchedule[]> {
    const args = plainToClass(AdhanScheduleFindManyArgs, request.query);
    return this.service.adhanSchedules({
      ...args,
      select: {
        createdAt: true,
        id: true,
        location: true,
        time: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AdhanSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AdhanSchedule",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async adhanSchedule(
    @common.Param() params: AdhanScheduleWhereUniqueInput
  ): Promise<AdhanSchedule | null> {
    const result = await this.service.adhanSchedule({
      where: params,
      select: {
        createdAt: true,
        id: true,
        location: true,
        time: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AdhanSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AdhanSchedule",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAdhanSchedule(
    @common.Param() params: AdhanScheduleWhereUniqueInput,
    @common.Body() data: AdhanScheduleUpdateInput
  ): Promise<AdhanSchedule | null> {
    try {
      return await this.service.updateAdhanSchedule({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          location: true,
          time: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AdhanSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AdhanSchedule",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAdhanSchedule(
    @common.Param() params: AdhanScheduleWhereUniqueInput
  ): Promise<AdhanSchedule | null> {
    try {
      return await this.service.deleteAdhanSchedule({
        where: params,
        select: {
          createdAt: true,
          id: true,
          location: true,
          time: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}