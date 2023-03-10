import { Test, TestingModule } from '@nestjs/testing';
import { ParcService } from './parc.service';

describe('ParcService', () => {
  let service: ParcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParcService],
    }).compile();

    service = module.get<ParcService>(ParcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
