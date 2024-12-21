import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, username: 'john', password: bcrypt.hashSync('1234', 10) },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), username, password: hashedPassword };
    this.users.push(user);
    return user;
  }
}
