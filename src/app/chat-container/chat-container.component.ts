import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  public messageList: any;
  public message: string;

  constructor() { }

  ngOnInit() {
    this.messageList = [
      {
        message: 'Ljsdojfladsf adf lkasdfl kmasdlfj amsdkjflka fjg ajskdjfiuahsf alkds',
        time: '21:22',
        date: '10th of June',
        isMy: false
      },
      {
        message: 'Ljsdojfladsf adf lkasdfl kmasdlfj amsdkjfsdfhgfghfg dfgfd djfiuahsf alkds',
        time: '21:22',
        date: '10th of June',
        isMy: true,
        status: 'Delivered'
      },
      {
        message: 'Ljsdojfladsf adf lkasadsfasdfjflka fjg ajskdjfiuahsf alkds',
        time: '21:22',
        date: '10th of June',
        isMy: false
      },
      {
        message: 'Ljsdojfladsf adf lkasdfl kmasdlfasdfasdgfiuahsf alkds',
        time: '21:22',
        date: '10th of June',
        isMy: true,
        status: 'Seen'
      },
      {
        message: 'Ljsdojfladsf adf asdfasdffjg ajskdjfiuahsf alkds',
        time: '21:22',
        date: '10th of June',
        isMy: true,
        status: 'Seen'
      },
    ];
  }


  sendMsg(){
    this.messageList.push({
      message: this.message,
      time: '1:22',
      isMy: true,
      date: '22nd of Dec',
      status: 'Sent'
    });
    this.message = '';
  }

  keyDownFunction($event) {
    if($event.keyCode == 13) {
      this.sendMsg();
    }
  }
}
