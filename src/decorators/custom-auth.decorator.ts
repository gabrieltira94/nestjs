import { RolesGuard } from "@/guards/roles.guard";
import { SetMetadata, UseGuards, applyDecorators } from "@nestjs/common";

export function CustomAuth(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(RolesGuard)
  );
}
