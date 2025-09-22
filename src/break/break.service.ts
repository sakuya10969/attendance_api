import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BreakService {
    constructor(private readonly prismaService: PrismaService) {}

    async startBreak(attendanceId: string, date: Date, startTime: Date) {
        const breakRecord = await this.prismaService.break.create({
            data: { attendanceId, date, startTime, endTime: null },
        });
        
        return breakRecord;
    }

    async endBreak(attendanceId: string, endTime: Date) {
        const breakRecord = await this.prismaService.break.findFirst({
            where: { attendanceId, endTime: null },
        });

        if (!breakRecord) throw new Error("該当の休憩レコードが見つかりません");

        return await this.prismaService.break.update({
            where: { id: breakRecord.id },
            data: { endTime },
        });
    }
}
