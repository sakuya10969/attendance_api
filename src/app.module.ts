import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AttendanceModule } from './attendance/attendance.module';
import { BreakModule } from './break/break.module';
import { AttendanceDataModule } from './attendance-data/attendance-data.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, AttendanceModule, BreakModule, AttendanceDataModule, ConfigModule.forRoot({ isGlobal: true }),],
  controllers: [AppController],
  providers: [AppService, Reflector, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
