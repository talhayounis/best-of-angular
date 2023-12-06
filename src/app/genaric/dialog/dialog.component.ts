import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  title:string = 'Dialog Component';
  subTitle: string = 'Dialog sub title';
  constructor(){}
  ngOnInit(){}
}
