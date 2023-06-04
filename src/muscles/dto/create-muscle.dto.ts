import { IsBoolean, IsString } from "class-validator";

export class CreateMuscleDto {
  @IsString()
  name: string;

  @IsBoolean()
  isUpperBody: boolean;

  @IsBoolean()
  isUsedOften: boolean;
}
