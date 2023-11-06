import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  constructor(){}

  name:string = 'Talha Younis';
  ngOnInit(){

  }
}
