import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sname: string = "hi my name is angular";
  imgSrc?: string;
  isvalid = false;
  months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  peopleByCountry: any[] = [
    { 'country': 'UK', 'people': [{ "name": "Douglas Pace" }, { "name": "Mcleod Mueller" },] },
    { 'country': 'US', 'people': [{ "name": "Day Meyers" }, { "name": "Aguirre Ellis" }, { "name": "Cook Tyson" }] }];
  people: any[] = [
    { "name": "Douglas Pace", "age": 35, "country": 'MARS' },
    { "name": "Mcleod Mueller", "age": 32, "country": 'USA' },
    { "name": "Day Meyers", "age": 21, "country": 'UK' },
    { "name": "Aguirre Ellis", "age": 34, "country": 'UK' },
    { "name": "Cook Tyson", "age": 32, "country": 'USA' }];

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = "../../assets/img/200x200.svg";

  }

}
