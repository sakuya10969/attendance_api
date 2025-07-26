import { Controller, Query, Get } from '@nestjs/common';
import { AttendanceDataService } from './attendance-data.service';

@Controller('attendance-data')
export class AttendanceDataController {
  constructor(private readonly attendanceDataService: AttendanceDataService) {}

  @Get('all')
  findAll(@Query('userId') userId: string) {
    return this.attendanceDataService.findAll(userId);
  }
}
