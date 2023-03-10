import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OmService } from './om.service';
import { CreateOmDto } from './dto/create-om.dto';
import { UpdateOmDto } from './dto/update-om.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/jwt-roles.guard';
import { Roles } from 'src/user/roles.decorator';
import { Role } from 'src/user/user.enum';

@ApiTags('oms')
@Controller('oms')
export class OmController {
  constructor(private readonly omService: OmService) {}

  @Post()
  @Roles(Role.LOGISTICIAN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Create om' })
  @ApiResponse({
    status: 201,
    description: 'The om has been successfully created.',
  })
  create(@Body() createOmDto: CreateOmDto) {
    return this.omService.create(createOmDto);
  }

  @Get()
  @Roles(Role.LOGISTICIAN)
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Find all oms' })
  @ApiResponse({
    status: 200,
    description: 'Find all oms.',
    type: CreateOmDto,
  })
  findAll(@Query('state') state: string) {
    return this.omService.findAll(state);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Find one om' })
  @ApiResponse({
    status: 200,
    description: 'The om has been successfully find.',
  })
  findOne(@Param('id') id) {
    return this.omService.findOne(id);
  }

  @Get('jockey/:idUser')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Find all oms for a specific jockey' })
  @ApiResponse({
    status: 200,
    description: 'Find all oms for a specific jockey.',
  })
  findUserOm(@Param('idUser') idUser: string, @Query('state') state: string) {
    return this.omService.findByUser(idUser, state);
  }

  @Patch(':id')
  @Roles(Role.LOGISTICIAN)
  @Roles(Role.JOCKEY)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Update one om' })
  @ApiResponse({
    status: 200,
    description: 'The om has been successfully updated.',
    type: UpdateOmDto,
  })
  update(@Param('id') id: string, @Body() updateOmDto: UpdateOmDto) {
    return this.omService.update(id, updateOmDto);
  }

  @Delete(':id')
  @Roles(Role.LOGISTICIAN)
  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Delete one om' })
  @ApiResponse({
    status: 202,
    description: 'The om has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.omService.remove(id);
  }
}
