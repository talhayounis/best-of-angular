import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'best-of-angular';
  subTitle: string = 'Ap sub title';
  constructor(){}
  ngOnInit(){}
}
