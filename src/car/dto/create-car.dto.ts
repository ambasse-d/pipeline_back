import { ApiProperty } from '@nestjs/swagger';
import { CarState } from './enum-car.dto';

export class CreateCarDto {
  @ApiProperty()
  private color: string;

  @ApiProperty()
  private brand: string;

  @ApiProperty()
  private vin: number;

  @ApiProperty()
  private state: CarState;

  @ApiProperty()
  private attrition: number;

  @ApiProperty()
  private model: string;
}
