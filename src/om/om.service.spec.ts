import { Test, TestingModule } from '@nestjs/testing';
import { OmService } from './om.service';

describe('OmService', () => {
  let service: OmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmService],
    }).compile();

    service = module.get<OmService>(OmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
