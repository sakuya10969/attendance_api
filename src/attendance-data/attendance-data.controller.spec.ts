import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceDataController } from './attendance-data.controller';
import { AttendanceDataService } from './attendance-data.service';

describe('AttendanceDataController', () => {
  let controller: AttendanceDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceDataController],
      providers: [AttendanceDataService],
    }).compile();

    controller = module.get<AttendanceDataController>(AttendanceDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
