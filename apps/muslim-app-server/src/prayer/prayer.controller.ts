import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrayerService } from "./prayer.service";
import { PrayerControllerBase } from "./base/prayer.controller.base";

@swagger.ApiTags("prayers")
@common.Controller("prayers")
export class PrayerController extends PrayerControllerBase {
  constructor(
    protected readonly service: PrayerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
