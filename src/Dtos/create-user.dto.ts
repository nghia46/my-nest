import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user', required: false })
  @IsOptional()  // name là optional
  @IsString()
  name?: string;

  @ApiProperty({ description: 'The email of the user', required: true })
  @IsEmail()
  email: string;
}
