import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class EndAttendanceDto {
  @ApiProperty({
    description: 'ユーザーID',
    example: 'user-uuid-here',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: '終了時間',
    example: '2023-01-01T18:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  endTime: Date;
}
