import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";

const muscles = ['chest', 'back', 'biceps', 'triceps', 'shoulders', 'abs', 'legs', 'lower back'];

@Controller('muscles')
export class Muscles {

  @Get()
  findAll(@Req() request: Request): string[] {
    console.log({ url: request.url });

    return muscles;
  }

  @Post()
  create(): string[] {
    console.log('We are inserting specified muscle in our DB');

    return muscles;
  }
}
