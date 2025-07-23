import { Controller, Post, Body } from '@nestjs/common';

import { BreakService } from './break.service';
import { StartBreakDto } from './dto/start-break.dto';
import { EndBreakDto } from './dto/end-break.dto';

@Controller('break')
export class BreakController {
  constructor(private readonly breakService: BreakService) {}

  @Post('start')
  start(@Body() startBreakDto: StartBreakDto) {
    return this.breakService.startBreak(startBreakDto.attendanceId, startBreakDto.date, startBreakDto.startTime);
  }

  @Post('end')
  end(@Body() endBreakDto: EndBreakDto) {
    return this.breakService.endBreak(endBreakDto.attendanceId, endBreakDto.endTime);
  }
}
