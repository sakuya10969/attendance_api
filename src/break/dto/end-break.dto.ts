import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class EndBreakDto {
  @ApiProperty({
    description: '勤怠ID',
    example: 'attendance-uuid-here',
  })
  @IsString()
  @IsNotEmpty()
  attendanceId: string;

  @ApiProperty({
    description: '終了時間',
    example: '2023-01-01T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  endTime: Date;
}