import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  newVal: any = "AnyThing";
  newArrayData: any[] = ['A','B','C'];
  private banah: string = "Banah";

  constructor(){}
  ngOnInit(){}
  getLatest(){
    return 'Latest Data'
  }
}
