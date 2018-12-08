import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-chat-message',
  templateUrl: './my-chat-message.component.html',
  styleUrls: ['./my-chat-message.component.css']
})
export class MyChatMessageComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
