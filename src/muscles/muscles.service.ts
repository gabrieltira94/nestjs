import { CreateMuscleDto } from "@/muscles/dto/create-muscle.dto";
import { Muscle } from "@/muscles/interfaces/muscle.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MuscleService {
  private readonly muscles: Muscle[] = [];

  create(muscleDto: CreateMuscleDto) {
    this.muscles.push(muscleDto);
  }

  findAll() {
    return this.muscles;
  }
}