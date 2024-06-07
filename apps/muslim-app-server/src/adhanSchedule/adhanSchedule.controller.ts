import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdhanScheduleService } from "./adhanSchedule.service";
import { AdhanScheduleControllerBase } from "./base/adhanSchedule.controller.base";

@swagger.ApiTags("adhanSchedules")
@common.Controller("adhanSchedules")
export class AdhanScheduleController extends AdhanScheduleControllerBase {
  constructor(
    protected readonly service: AdhanScheduleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
