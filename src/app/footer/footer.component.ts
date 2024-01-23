import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  title: string = 'footer';
  subTitle: string ='footer sub title';
  footerNumber: number = 11;
  goFooter: string = 'Lets go footer';
constructor(){

}
ngOnInit(){}
}
