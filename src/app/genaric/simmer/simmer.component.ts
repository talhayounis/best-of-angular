import { Component } from '@angular/core';

@Component({
  selector: 'app-simmer',
  templateUrl: './simmer.component.html',
  styleUrls: ['./simmer.component.scss']
})
export class SimmerComponent {

  title: string = 'Simmer Component';
  subTitle: string = 'Simmer Sub Title';
  simmirNumber: number = 12;
  simmirArray: any[] = [];
  constructor(){}
  ngOnInit(){}
}
