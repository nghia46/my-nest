import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class DemoController {
  constructor() {}
  @Get("/hello")
  @ApiOperation({ summary: 'Get Hello' })
  @ApiResponse({ status: 200, description: 'Hello World' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  getHello(): string {
    return 'Hello World';
  }
}
