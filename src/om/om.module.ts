import { Module } from '@nestjs/common';
import { OmService } from './om.service';
import { OmController } from './om.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Om, OmSchema } from './om.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Om.name, schema: OmSchema }]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [OmController],
  providers: [OmService],
})
export class OmModule {}
