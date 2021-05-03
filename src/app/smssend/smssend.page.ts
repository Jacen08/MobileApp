import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-smssend',
  templateUrl: './smssend.page.html',
  styleUrls: ['./smssend.page.scss'],
})
export class SmssendPage implements OnInit {

  constructor(private sms: SMS) { }
  ngOnInit() {
  }
  sendMessage(){alert('SMS Requested'); this.sms.send('Enter Number', 'Type Reminder!');}
}
