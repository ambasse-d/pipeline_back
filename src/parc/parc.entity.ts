import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

@Schema({ collection: 'parcs' })
export class Parc {
  id: mongoose.Types.ObjectId;

  @Prop()
  private name: string;

  @Prop()
  private address: string;

  @Prop()
  private nbPlacesTotal: number;
}

export type ParcDocument = HydratedDocument<Parc>;
export const ParcSchema = SchemaFactory.createForClass(Parc);
