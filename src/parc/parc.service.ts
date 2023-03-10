import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Parc, ParcDocument } from "./parc.entity";
import { CreateParcDto } from "./dto/create-parc.dto";
import { UpdateParcDto } from "./dto/update-parc.dto";

@Injectable()
export class ParcService {
  constructor(
    @InjectModel(Parc.name) private parcModel: Model<ParcDocument>
  ) {
  }

  create(createParcDto: CreateParcDto): Promise<Parc> {
    const createdParc: any = new this.parcModel(createParcDto);
    return createdParc.save();
  }

  findAll(): Promise<Parc[]> {
    return this.parcModel.find().exec();
  }

  findOne(id: string): Promise<Parc> {
    return this.parcModel.findById(id).exec();
  }

  update(id: string, updateParcDto: UpdateParcDto): Promise<Parc> {
    return this.parcModel.findByIdAndUpdate(id, updateParcDto).exec();
  }

  remove(id: string): Promise<Parc> {
    return this.parcModel.findByIdAndDelete(id).exec();
  }
}
