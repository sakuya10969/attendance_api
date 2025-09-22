import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  constructor(private readonly userService: UserService) {}

  async findById(id: string) {
    const user = await this.userService.findById(id);
    return user;
  }
}
