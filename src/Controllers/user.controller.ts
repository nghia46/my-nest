import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../Services/user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/Dtos/create-user.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from 'src/user/commands/create-user.command';

@Controller('user')
export class UserController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create new user' })
  @Post()
  @ApiResponse({ status: 201, description: 'The user has been created.' })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async signupUser(
    @Body() userData: CreateUserDto, // Sử dụng DTO đã tạo
  ) {
    return this.commandBus.execute(new CreateUserCommand(userData));
  }
}
