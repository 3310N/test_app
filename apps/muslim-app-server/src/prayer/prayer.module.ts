import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrayerModuleBase } from "./base/prayer.module.base";
import { PrayerService } from "./prayer.service";
import { PrayerController } from "./prayer.controller";
import { PrayerResolver } from "./prayer.resolver";

@Module({
  imports: [PrayerModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrayerController],
  providers: [PrayerService, PrayerResolver],
  exports: [PrayerService],
})
export class PrayerModule {}
