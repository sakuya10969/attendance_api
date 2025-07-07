import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: '名前',
    example: 'test',
  })
  @IsString()
  @IsNotEmpty()
    name: string;

  @ApiProperty({
    description: 'メールアドレス',
    example: 'test@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'パスワード',
    example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
