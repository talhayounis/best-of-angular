import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  title: string = 'Accordion';
  subTitle: string = "Accordion sub title"
  accordianNumber: number = 9;
  randomNumber: number = 787;
  randomArray: any[]=[1,2,3,4];
  constructor(){}
  ngOnInit(){}
}
