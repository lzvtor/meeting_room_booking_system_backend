import { Injectable } from '@nestjs/common';
import { Observable, from, of, delay, concatMap } from 'rxjs';

@Injectable()
export class ChatService {
  streamReply(message: string): Observable<MessageEvent> {
    const reply = this.generateMockReply(message);
    const chars = reply.split('');

    return from(chars).pipe(
      concatMap((char) =>
        of(
          new MessageEvent('message', {
            data: char,
          }),
        ).pipe(delay(100)),
      ),
    );
  }

  private generateMockReply(input: string): string {
    return `你刚才说的是「${input}」，正在回复中...`;
  }
}
