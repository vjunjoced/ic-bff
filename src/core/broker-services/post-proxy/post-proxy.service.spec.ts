import { Test, TestingModule } from '@nestjs/testing';
import { PostProxyService } from './post-proxy.service';

describe('PostProxyService', () => {
  let service: PostProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostProxyService],
    }).compile();

    service = module.get<PostProxyService>(PostProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
