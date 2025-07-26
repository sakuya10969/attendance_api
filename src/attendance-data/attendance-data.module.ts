import { Module } from '@nestjs/common';
import { AttendanceDataService } from './attendance-data.service';
import { AttendanceDataController } from './attendance-data.controller';

@Module({
  controllers: [AttendanceDataController],
  providers: [AttendanceDataService],
})
export class AttendanceDataModule {}
