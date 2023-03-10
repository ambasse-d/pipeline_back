import { Test, TestingModule } from '@nestjs/testing';
import { ParcController } from './parc.controller';
import { ParcService } from './parc.service';

describe('ParcController', () => {
  let controller: ParcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcController],
      providers: [ParcService],
    }).compile();

    controller = module.get<ParcController>(ParcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
