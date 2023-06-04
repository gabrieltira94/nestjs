import { MusclesController } from "@/muscles/muscles.controller";
import { MuscleService } from "@/muscles/muscles.service";
import { Global, Module } from "@nestjs/common";

@Global()
@Module({
  controllers: [MusclesController],
  providers: [MuscleService],
  exports: [MuscleService]
})
export class MusclesModule { }
