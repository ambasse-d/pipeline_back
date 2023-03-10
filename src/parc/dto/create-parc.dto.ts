import { ApiProperty } from '@nestjs/swagger';

export class CreateParcDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  nbPlacesTotal: number;
}
