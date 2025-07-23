import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BreakService {
    constructor(private readonly prisma: PrismaService) {}

    async startBreak(attendanceId: string, date: Date, startTime: Date) {
        const breakRecord = await this.prisma.break.create({
            data: { attendanceId, date, startTime, endTime: null },
        });
        
        return breakRecord;
    }

    async endBreak(attendanceId: string, endTime: Date) {
        const breakRecord = await this.prisma.break.findFirst({
            where: { attendanceId, endTime: null },
        });

        if (!breakRecord) throw new Error("該当の休憩レコードが見つかりません");

        return await this.prisma.break.update({
            where: { id: breakRecord.id },
            data: { endTime },
        });
    }
}
