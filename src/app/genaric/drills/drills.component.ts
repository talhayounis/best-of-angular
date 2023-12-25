import { Component } from '@angular/core';

@Component({
  selector: 'app-drills',
  templateUrl: './drills.component.html',
  styleUrls: ['./drills.component.scss']
})
export class DrillsComponent {

  title: string = "Drill Component";
  subTitle : string = 'Drill sub title';
  drillNumber: number = 5;
  drillArray: any[] = [];
  constructor(){}
  ngOnInit(){}
}
