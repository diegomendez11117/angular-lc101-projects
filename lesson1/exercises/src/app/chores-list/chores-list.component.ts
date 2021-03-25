import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores-list',
   templateUrl: './chores-list.component.html',
   styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
   chores = ['The Manchurian Candidate', 'Oceans 8', 'The Godfather​', 'Casablanca'];

   constructor() { }

   ngOnInit() {
   }

}