import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdkarModuleBase } from "./base/adkar.module.base";
import { AdkarService } from "./adkar.service";
import { AdkarController } from "./adkar.controller";
import { AdkarResolver } from "./adkar.resolver";

@Module({
  imports: [AdkarModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdkarController],
  providers: [AdkarService, AdkarResolver],
  exports: [AdkarService],
})
export class AdkarModule {}
