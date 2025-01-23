import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.findUser(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Видаляємо пароль перед поверненням
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Імітація пошуку користувача в базі
  private async findUser(username: string) {
    const users = [
      { userId: 1, username: 'admin', password: await bcrypt.hash('password123', 10) },
    ];
    return users.find(user => user.username === username);
  }
}
