import { Test, TestingModule } from '@nestjs/testing';
import { OmController } from './om.controller';
import { OmService } from './om.service';

describe('OmController', () => {
  let controller: OmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OmController],
      providers: [OmService],
    }).compile();

    controller = module.get<OmController>(OmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
