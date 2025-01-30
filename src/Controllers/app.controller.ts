import { Controller, Get } from '@nestjs/common';
import { AppService } from '../Services/app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello' })
  @ApiResponse({ status: 200, description: 'Hello World' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  getHello(): string {
    return this.appService.getHello();
  }
}
