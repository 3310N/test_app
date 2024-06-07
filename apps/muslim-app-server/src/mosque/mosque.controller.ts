import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MosqueService } from "./mosque.service";
import { MosqueControllerBase } from "./base/mosque.controller.base";

@swagger.ApiTags("mosques")
@common.Controller("mosques")
export class MosqueController extends MosqueControllerBase {
  constructor(
    protected readonly service: MosqueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
