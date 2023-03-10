import { PartialType } from '@nestjs/mapped-types';
import { CreateOmDto } from './create-om.dto';

export class UpdateOmDto extends PartialType(CreateOmDto) {}
