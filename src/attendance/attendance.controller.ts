import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AttendanceService } from './attendance.service';
import { StartAttendanceDto } from './dto/start-attendance.dto';
import { EndAttendanceDto } from './dto/end-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('start')
  start(@Body() startAttendanceDto: StartAttendanceDto) {
    return this.attendanceService.startAttendance(
      startAttendanceDto.userId,
      startAttendanceDto.date,
      startAttendanceDto.startTime,
    );
  }

  @Post('end')
  end(@Body() endAttendanceDto: EndAttendanceDto) {
    return this.attendanceService.endAttendance(endAttendanceDto.userId, endAttendanceDto.endTime);
  }
}
