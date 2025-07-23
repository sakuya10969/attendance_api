import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  async startAttendance(userId: string, date: Date, startTime: Date, endTime: Date) {
    const attendance = await this.prisma.attendance.create({
      data: {
        userId,
        date,
        startTime,
        endTime,
      },
    });

    return attendance;
  }
}
