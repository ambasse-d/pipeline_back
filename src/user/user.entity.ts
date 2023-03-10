import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from './user.enum';

@Schema({ collection: 'users' })
export class User {
  _id: mongoose.Types.ObjectId;

  @Prop({ require: true })
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ require: true, unique: true })
  email: string;

  @Prop({ require: true })
  password: string;

  @Prop({ require: true, type: String, enum: Role })
  role: Role;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
