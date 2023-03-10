import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Role } from '../user.enum';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: Role;
}
