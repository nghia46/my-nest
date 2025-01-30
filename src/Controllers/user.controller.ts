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

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create new user' })
  @Post('user')
  @ApiResponse({ status: 201, description: 'The user has been created.' })
  async signupUser(
    @Body() userData: CreateUserDto, // Sử dụng DTO đã tạo
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
  @ApiOperation({ summary: 'Get all users' })
  @Get('users')
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }
}
