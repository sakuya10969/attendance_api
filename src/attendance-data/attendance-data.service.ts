import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceDataService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(userId: string) {
    const attendances = await this.prisma.attendance.findMany({
      where: {
        userId: userId,
      },
      include: {
        breaks: true,
      },
      orderBy: {
        date: 'desc',
      },
    });

    return attendances;
  }
}
