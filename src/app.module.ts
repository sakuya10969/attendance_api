import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AttendanceModule } from './attendance/attendance.module';
import { BreakModule } from './break/break.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, AttendanceModule, BreakModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
