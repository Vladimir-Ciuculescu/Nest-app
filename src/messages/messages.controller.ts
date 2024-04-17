import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesSeervice: MessagesService) {}

  @Get()
  getMessages(@Req() request) {
    return this.messagesSeervice.getMessages(request);
  }

  @Post()
  addMessage(@Body() payload) {
    return this.messagesSeervice.addMessage(payload);
  }

  @Post('/:id')
  addMessagWithParam(@Param('id') id, @Body() body) {
    return this.messagesSeervice.addMessageWithParam(id, body);
  }

  @Get('/:id')
  getMessageById(@Param('id') id) {
    return this.messagesSeervice.getMessageById(id);
  }
}
