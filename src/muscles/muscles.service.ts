import { Muscle } from "@/muscles/interfaces/muscle.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MuscleService {
  private readonly muscles: Muscle[] = [];

  create(muscle: Muscle) {
    this.muscles.push(muscle);
  }

  findAll() {
    return this.muscles;
  }
}