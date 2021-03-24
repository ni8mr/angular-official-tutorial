import { Injectable } from '@angular/core';

// Exposes cache of 'messages'
@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
