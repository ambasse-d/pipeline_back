import { Module } from "@nestjs/common";
import { ParcService } from "./parc.service";
import { ParcController } from "./parc.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Parc, ParcSchema } from "./parc.entity";

@Module({
  imports: [MongooseModule.forFeature([{ name: Parc.name, schema: ParcSchema }])],
  controllers: [ParcController],
  providers: [ParcService]
})
export class ParcModule {
}
