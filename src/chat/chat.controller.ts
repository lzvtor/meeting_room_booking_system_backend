import { Controller, Query, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Sse('stream')
  stream(@Query('message') message: string): Observable<MessageEvent> {
    return this.chatService.streamReply(message);
  }
}
