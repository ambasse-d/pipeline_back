import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CarState } from './dto/enum-car.dto';

export type CarDocument = HydratedDocument<Car>;

@Schema({ collection: 'cars' })
export class Car {
  id: mongoose.Types.ObjectId;

  @Prop()
  private color: string;

  @Prop()
  private brand: string;

  @Prop()
  private vin: number;

  @Prop({ require: true, type: String, enum: CarState })
  private state: CarState;

  @Prop()
  private attrition: number;

  @Prop()
  private model: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
