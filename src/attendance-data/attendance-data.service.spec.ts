import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceDataService } from './attendance-data.service';

describe('AttendanceDataService', () => {
  let service: AttendanceDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceDataService],
    }).compile();

    service = module.get<AttendanceDataService>(AttendanceDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
