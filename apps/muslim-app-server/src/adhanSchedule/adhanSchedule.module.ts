import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdhanScheduleModuleBase } from "./base/adhanSchedule.module.base";
import { AdhanScheduleService } from "./adhanSchedule.service";
import { AdhanScheduleController } from "./adhanSchedule.controller";
import { AdhanScheduleResolver } from "./adhanSchedule.resolver";

@Module({
  imports: [AdhanScheduleModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdhanScheduleController],
  providers: [AdhanScheduleService, AdhanScheduleResolver],
  exports: [AdhanScheduleService],
})
export class AdhanScheduleModule {}
