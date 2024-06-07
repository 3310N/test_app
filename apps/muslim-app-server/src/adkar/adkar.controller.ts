import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdkarService } from "./adkar.service";
import { AdkarControllerBase } from "./base/adkar.controller.base";

@swagger.ApiTags("adkars")
@common.Controller("adkars")
export class AdkarController extends AdkarControllerBase {
  constructor(
    protected readonly service: AdkarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
