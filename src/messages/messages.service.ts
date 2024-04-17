import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class MessagesService {
  getMessages(request: Request) {
    console.log(111, request);
    return 'Hello there, these are the messages !';
  }

  addMessage(payload: any) {
    const { message, user } = payload;
    return `Message ${message} from ${user} added !`;
  }

  addMessageWithParam(id, body: any) {
    const { message, user } = body;
    return `Message ${message} from ${user} with id ${id} added !`;
  }

  getMessageById(id: string) {
    return `Message with id ${id}`;
  }
}
