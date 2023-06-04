import { Controller, Get, Header, HostParam, HttpCode, Param, Post, Redirect, Req } from "@nestjs/common";
import { Request } from "express";

const muscles = ['chest', 'back', 'biceps', 'triceps', 'shoulders', 'abs', 'legs', 'lower back'];

@Controller({ path: 'muscles', host: 'localhost:3000' })
export class Muscles {

  @Get()
  findAll(@Req() request: Request): string[] {
    console.log({ url: request.url });

    return muscles;
  }

  @Get(':name')
  findIndex(@Param('name') name: string) {
    return muscles.indexOf(name);
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

  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
