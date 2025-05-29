import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const filePath = join(process.cwd(), 'src', 'assets', 'template.html');
    return readFileSync(filePath, 'utf-8');
  }
}
