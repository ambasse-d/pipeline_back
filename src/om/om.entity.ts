import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { OmState } from './dto/enum-om.dto';

@Schema({ collection: 'oms' })
export class Om {
  id: mongoose.Types.ObjectId;

  @Prop()
  private type: string;

  @Prop({ require: true, type: String, enum: OmState })
  private state: OmState;

  @Prop()
  private idCar: string;

  @Prop()
  private startZone: string;

  @Prop()
  private endingZone: string;

  @Prop()
  private idUser: string;

  @Prop()
  private date: Date;

  @Prop()
  private idParc: string;

  @Prop()
  private description: string;
}

export type OmDocument = HydratedDocument<Om>;
export const OmSchema = SchemaFactory.createForClass(Om);
