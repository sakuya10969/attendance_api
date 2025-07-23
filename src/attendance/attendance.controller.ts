import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.startAttendance(
      createAttendanceDto.userId,
      createAttendanceDto.date,
      createAttendanceDto.startTime,
      createAttendanceDto.endTime,
    );
  }
}
