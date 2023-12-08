import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string = "D Header";
  subTitle: string = 'Header sub title';
  constructor(){}
  ngOnInit(){}
}
