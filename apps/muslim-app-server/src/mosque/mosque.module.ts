import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MosqueModuleBase } from "./base/mosque.module.base";
import { MosqueService } from "./mosque.service";
import { MosqueController } from "./mosque.controller";
import { MosqueResolver } from "./mosque.resolver";

@Module({
  imports: [MosqueModuleBase, forwardRef(() => AuthModule)],
  controllers: [MosqueController],
  providers: [MosqueService, MosqueResolver],
  exports: [MosqueService],
})
export class MosqueModule {}
