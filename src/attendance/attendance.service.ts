import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  async startAttendance(userId: string, date: Date, startTime: Date) {
    const attendance = await this.prisma.attendance.create({
      data: {
        userId,
        date,
        startTime,
        endTime: null,
      },
    });

    return attendance;
  }

  async endAttendance(userId: string, endTime: Date) {
    const record = await this.prisma.attendance.findFirst({
      where: {
        userId,
        endTime: null,
      },
    });
  
    if (!record) throw new Error("該当の勤怠レコードが見つかりません");
  
    return await this.prisma.attendance.update({
      where: { id: record.id },
      data: { endTime },
    });
  }
  
}
