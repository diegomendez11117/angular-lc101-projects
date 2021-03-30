import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
   pets = ['uno','dos','tres','cuatro'];
  chores = [
    {
      title: "Today's Chores",
      tasks: [
        "Empty dishwasher",
        "Complete LaunchCode prep work",
        "Buy groceries",
      ],
    },
    {
      title: "Today's Chores",
      tasks: [
        "Load dishwasher",
        "Finish LaunchCode prep work",
        "Buy the Groceries you forgot",
      ],
    },
    {
      title: "Tomorrow's Chores",
      tasks: [
        "Empty dishwasher AGAIN",
        "Play with LaunchCode practice code",
        "Groceries, AGAIN",
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
