import { CreateMuscleDto } from "@/muscles/create-muscle.dto";
import { Body, Controller, Get, Header, HostParam, HttpCode, Param, Post, Redirect, Req } from "@nestjs/common";
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
  async findIndex(@Param('name') name: string): Promise<number> {
    return muscles.indexOf(name);
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createMuscleDto: CreateMuscleDto): string[] {
    console.log('We are inserting specified muscle in our DB', createMuscleDto);

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
