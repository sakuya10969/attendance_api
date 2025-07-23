import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class StartBreakDto {
  @ApiProperty({
    description: '勤怠ID',
    example: 'attendance-uuid-here',
  })
  @IsString()
  @IsNotEmpty()
  attendanceId: string;

  @ApiProperty({
    description: '日付',
    example: '2023-01-01T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    description: '開始時間',
    example: '2023-01-01T09:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty({
    description: '終了時間',
    example: '2023-01-01T10:00:00.000Z',
  })
  @IsDateString()
  @IsOptional()
  endTime: Date;
}