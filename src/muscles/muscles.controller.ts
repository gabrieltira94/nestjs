import { Controller, Get, Header, HttpCode, Post, Redirect, Req } from "@nestjs/common";
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
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string[] {
    console.log('We are inserting specified muscle in our DB');

    return muscles;
  }

  @Get('redirect')
  @Redirect('https://google.com', 302)
  redirect() {
    console.log('You were redirected.');
  }
}
