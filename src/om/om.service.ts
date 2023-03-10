import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Om, OmDocument } from './om.entity';
import { CreateOmDto } from './dto/create-om.dto';
import { UpdateOmDto } from './dto/update-om.dto';

@Injectable()
export class OmService {
  constructor(@InjectModel(Om.name) private omModel: Model<OmDocument>) {}

  create(createOmDto: CreateOmDto): Promise<Om> {
    const createdOm: any = new this.omModel(createOmDto);
    return createdOm.save();
  }

  findAll(state: string): Promise<Om[]> {
    if (state) {
      return this.omModel.find({ state: state }).exec();
    }
    return this.omModel.find().exec();
  }

  findOne(id): Promise<Om> {
    return this.omModel.findById(id).exec();
  }

  findByUser(id: string, state: string): Promise<Om[]> {
    if (state) {
      return this.omModel.find({ idUser: id, state: state }).exec();
    }
    return this.omModel.find({ idUser: id }).exec();
  }

  async update(id: string, updateOmDto: UpdateOmDto): Promise<Om> {
    return this.omModel
      .findByIdAndUpdate(id, updateOmDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<Om> {
    return this.omModel.findByIdAndDelete(id).exec();
  }
}
