import { ForbiddenException } from "@/app/exceptions/forbidden.exception";
import { HttpExceptionFilter } from "@/filters/http-exception.filter";
import { CreateMuscleDto } from "@/muscles/dto/create-muscle.dto";
import { MuscleService } from "@/muscles/muscles.service";
import { Body, Controller, Get, Header, HostParam, HttpCode, Param, ParseIntPipe, Post, Query, Redirect, Req, UseFilters } from "@nestjs/common";
import { Request } from "express";

const muscles = ['chest', 'back', 'biceps', 'triceps', 'shoulders', 'abs', 'legs', 'lower back'];

@Controller({ path: 'muscles' })
export class MusclesController {
  constructor(private musclesService: MuscleService) { }

  @Get()
  findAll(@Req() request: Request) {
    return this.musclesService.findAll();
  }

  @Get('redirect')
  @Redirect('https://google.com', 302)
  redirect() {
    console.log('You were redirected.');
  }

  @Get('filter')
  @UseFilters(HttpExceptionFilter)
  async filter() {
    throw new ForbiddenException();
  }

  /**
   * Use case: http://localhost:3001/muscles/pipe?pipe=muscle
   * @param pipe To work, should be a number or numeric string
   */
  @Get('pipe')
  getPipe(@Query('pipe', ParseIntPipe) pipe: number) {
    return pipe;
  }

  @Get('info')
  getInfo(@HostParam('account') account: string) {
    return account;
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
}
