import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ContentChild('body') elementBody?: ElementRef
  @ContentChildren('body2') elementBodyList?: QueryList<ElementRef>;
  @ViewChild('mydiv') elementDiv?: ElementRef;
  @ViewChild('userlist') elementuserlist?: UserListComponent;
  @ViewChildren('mydiv2') elementdivlist?: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    (this.elementBody?.nativeElement as HTMLDivElement).style.background = "red";
    // this.elementBodyList?.forEach(elm => {
    //   (elm.nativeElement as HTMLDivElement).style.color = "blue"
    // })
    (this.elementBodyList?.get(0)?.nativeElement as HTMLDivElement).style.color = 'green';
    (this.elementBodyList?.get(1)?.nativeElement as HTMLDivElement).style.color = 'red';
    (this.elementDiv?.nativeElement as HTMLParagraphElement).innerHTML = '<span>hi my name is ahmed</span>'
    this.elementuserlist?.print()
    this.elementdivlist?.forEach(elm => {
      (elm.nativeElement as HTMLParagraphElement).style.color = "red"
    })
  }
}
