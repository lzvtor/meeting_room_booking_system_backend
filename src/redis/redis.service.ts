import { Injectable } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  private client: RedisClientType | null = null;

  private async getClient(): Promise<RedisClientType> {
    if (!this.client) {
      this.client = createClient({
        socket: {
          host: 'localhost',
          port: 6379,
        },
      });
      await this.client.connect();
    }
    return this.client;
  }

  async set(key: string, value: string) {
    const client = await this.getClient();
    await client.set(key, value);
  }

  async get(key: string) {
    const client = await this.getClient();
    return await client.get(key);
  }

  async del(key: string) {
    const client = await this.getClient();
    await client.del(key);
  }

  async quit() {
    if (this.client) {
      await this.client.quit();
      this.client = null;
    }
  }
}
