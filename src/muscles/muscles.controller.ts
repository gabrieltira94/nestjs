import { CreateMuscleDto } from "@/muscles/dto/create-muscle.dto";
import { MuscleService } from "@/muscles/muscles.service";
import { Body, Controller, Get, Header, HostParam, HttpCode, Param, Post, Redirect, Req } from "@nestjs/common";
import { Request } from "express";

const muscles = ['chest', 'back', 'biceps', 'triceps', 'shoulders', 'abs', 'legs', 'lower back'];

@Controller({ path: 'muscles' })
export class MusclesController {
  constructor(private musclesService: MuscleService) { }

  @Get()
  findAll(@Req() request: Request) {
    console.log({ url: request.url });

    return this.musclesService.findAll();
  }

  @Get(':name')
  async findIndex(@Param('name') name: string): Promise<number> {
    return muscles.indexOf(name);
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createMuscleDto: CreateMuscleDto) {
    this.musclesService.create(createMuscleDto);
  }

  @Get('redirect')
  @Redirect('https://google.com', 302)
  redirect() {
    console.log('You were redirected.');
  }

  @Get('info')
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
