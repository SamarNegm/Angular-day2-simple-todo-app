import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserEventsComponent implements OnInit {
  imgsrc = "../../../assets/img/200x200.svg"
  isvalid = true;
  isadmin = false;
  styleobj: any = {};
  classlist?: string;
  constructor() { }

  ngOnInit(): void {
    if (this.isvalid) {
      this.classlist = 'green'
    } else {
      this.classlist = "red"
    }
    this.styleobj = {
      'font-size': this.isadmin ? '50px' : '20px',
      color: this.isvalid ? 'green' : 'red'
    }
  }
  print() {
    console.log("btn clicked")
  }
  print2(text: string) {
    console.log(text)
  }
  print3(event: any) {
    console.log(event)
  }
  togale() {
    this.isvalid = !this.isvalid
  }
}
