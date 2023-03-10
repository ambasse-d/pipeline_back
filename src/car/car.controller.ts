import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('cars')
@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @ApiOperation({ summary: 'Create car' })
  @ApiResponse({
    status: 201,
    description: 'The car has been successfully created.',
  })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all cars' })
  @ApiResponse({
    status: 200,
    description: 'Find all cars.',
    type: CreateCarDto,
  })
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find one car' })
  @ApiResponse({
    status: 200,
    description: 'The car has been successfully find.',
  })
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one car' })
  @ApiResponse({
    status: 200,
    description: 'The car has been successfully updated.',
  })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one car' })
  @ApiResponse({
    status: 202,
    description: 'The car has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
