import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-chat-message',
  templateUrl: './other-chat-message.component.html',
  styleUrls: ['./other-chat-message.component.css']
})
export class OtherChatMessageComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}
