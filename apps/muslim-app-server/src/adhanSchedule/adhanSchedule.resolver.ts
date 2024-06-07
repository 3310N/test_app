import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdhanScheduleResolverBase } from "./base/adhanSchedule.resolver.base";
import { AdhanSchedule } from "./base/AdhanSchedule";
import { AdhanScheduleService } from "./adhanSchedule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdhanSchedule)
export class AdhanScheduleResolver extends AdhanScheduleResolverBase {
  constructor(
    protected readonly service: AdhanScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
