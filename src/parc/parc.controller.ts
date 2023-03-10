import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParcService } from './parc.service';
import { CreateParcDto } from './dto/create-parc.dto';
import { UpdateParcDto } from './dto/update-parc.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('parcs')
@Controller('parcs')
export class ParcController {
  constructor(private readonly parcService: ParcService) {}

  @Post()
  @ApiOperation({ summary: 'Create parc' })
  @ApiResponse({
    status: 201,
    description: 'The parc has been successfully created.',
    type: CreateParcDto,
  })
  create(@Body() createParcDto: CreateParcDto) {
    return this.parcService.create(createParcDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all parcs' })
  @ApiResponse({
    status: 200,
    description: 'Find all parcs.',
  })
  findAll() {
    return this.parcService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one parc' })
  @ApiResponse({
    status: 200,
    description: 'The parc has been successfully find.',
  })
  findOne(@Param('id') id: string) {
    return this.parcService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one parc' })
  @ApiResponse({
    status: 200,
    description: 'The parc has been successfully updated.',
    type: UpdateParcDto,
  })
  update(@Param('id') id: string, @Body() updateParcDto: UpdateParcDto) {
    return this.parcService.update(id, updateParcDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one parc' })
  @ApiResponse({
    status: 202,
    description: 'The parc has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.parcService.remove(id);
  }
}
