import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  constructor(){}

  title:string = 'Custom Form';
  subTitle: string = 'Custom form component';
  ngOnInit(){

  }
}
