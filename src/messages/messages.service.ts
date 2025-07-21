import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable()
export class MessagesService {
  constructor(public messagesProp: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesProp.findOne(id);
  }

  findAll() {
    return this.messagesProp.findAll();
  }

  create(content: string) {
    return this.messagesProp.create(content);
  }
}
