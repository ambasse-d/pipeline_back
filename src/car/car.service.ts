import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './car.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  create(createCarDto: CreateCarDto): Promise<Car> {
    const createdCar: any = new this.carModel(createCarDto);
    return createdCar.save();
  }

  findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  update(id: string, updateCarDto: UpdateCarDto): Promise<Car> {
    return this.carModel.findByIdAndUpdate(id, updateCarDto).exec();
  }

  remove(id: number): Promise<Car> {
    return this.carModel.findByIdAndDelete(id).exec();
  }
}
