import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParcModule } from './parc/parc.module';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { OmModule } from './om/om.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const databaseName = process.env.DB_DATABASE_NAME;
const dbURI = `mongodb+srv://${username}:${password}@${host}/${databaseName}`;

@Module({
  imports: [
    ParcModule,
    UserModule,
    CarModule,
    OmModule,
    AuthModule,
    MongooseModule.forRoot(dbURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
