import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  spreadBackColor = "aliceblue";
  sheetName = "Goods List";
  hostStyle = {
    width: "800px",
    height: "600px"
  };
  data = [
    {
      Name: "Apple",
      Category: "Fruit",
      Price: 1,
      "Shopping Place": "Wal-Mart"
    },
    {
      Name: "Potato",
      Category: "Fruit",
      Price: 2.01,
      "Shopping Place": "Other"
    },
    {
      Name: "Tomato",
      Category: "Vegetable",
      Price: 3.21,
      "Shopping Place": "Other"
    },
    {
      Name: "Sandwich",
      Category: "Food",
      Price: 2,
      "Shopping Place": "Wal-Mart"
    },
    {
      Name: "Hamburger",
      Category: "Food",
      Price: 2,
      "Shopping Place": "Wal-Mart"
    },
    {
      Name: "Grape",
      Category: "Fruit",
      Price: 4,
      "Shopping Place": "Sun Store"
    }
  ];
  columnWidth = 100;
}
