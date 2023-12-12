import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  loaderName: string = "Hold tight, Loading";
  subTitle: string = 'Sub headings';
  constructor(){}
  ngOnInit(){}
}
