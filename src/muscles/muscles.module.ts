import { MusclesController } from "@/muscles/muscles.controller";
import { MuscleService } from "@/muscles/muscles.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [MusclesController],
  providers: [MuscleService],
  exports: [MuscleService]
})
export class MusclesModule { }
