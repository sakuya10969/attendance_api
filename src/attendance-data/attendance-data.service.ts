import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceDataService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(userId: string) {
    const attendances = await this.prismaService.attendance.findMany({
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
