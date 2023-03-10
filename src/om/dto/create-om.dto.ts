import { ApiProperty } from '@nestjs/swagger';
import { OmState } from './enum-om.dto';

export class CreateOmDto {
  @ApiProperty()
  private type: string;

  @ApiProperty()
  private state: OmState;

  @ApiProperty()
  private idCar: string;

  @ApiProperty()
  private startZone: string;

  @ApiProperty()
  private endingZone: string;

  @ApiProperty()
  private idUser: string;

  @ApiProperty()
  private date: Date;

  @ApiProperty()
  private idParc: string;

  @ApiProperty()
  private description: string;
}
