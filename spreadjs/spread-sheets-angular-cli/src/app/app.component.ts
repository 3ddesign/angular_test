import { Component } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spreadBackColor = 'aliceblue';
  sheetName = 'Goods List';
  hostStyle = {
    width: '800px',
    height: '600px'
  };
  data = [
  ];
  columnWidth = 100;

  workbookInit(args){
    let spread:GC.Spread.Sheets.Workbook = args.spread;
    let sheet =  spread.getActiveSheet();
    sheet.getCell(0,0).text("My SpreadJS Angular Project").foreColor("blue");
    sheet.options.isProtected = true;
  }
}
