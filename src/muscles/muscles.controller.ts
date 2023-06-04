import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('muscles')
export class Muscles {

  @Get()
  findAll(@Req() request: Request): string[] {
    console.log({ url: request.url });

    return ['chest', 'back', 'biceps', 'triceps', 'shoulders', 'abs', 'legs', 'lower back'];
  }
}
