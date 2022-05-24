import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  /* An empty array that is responsible
  to add a division */
  public items: any = [];
  public result: any = [];
  /* A two-way binding performed which
  pushes text on division */
  public newTask: any;


  /* When input is empty, it will
  not create a new division */
  public addToList(newTask: string) {
    if (newTask == '') {
    }
    else {
      console.log("new task is " + newTask);

      this.items.push(newTask);
      this.newTask = '';
    }
  }
  public search(data: string) {

    console.log("Search");

    this.result = [];
    if (data != "") {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].includes((data)))
          this.result.push(this.items[i]);
      }
    }
    console.log(this.result);



  }

  /* This function takes to input the
  task, that has to be deleted*/
  public deleteTask(index: any) {
    this.items.splice(index, 1);
  }
}
