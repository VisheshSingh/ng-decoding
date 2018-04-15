import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names:string[] = ["John","Amy","Peter"];
  name= '';
  title = 'app';

  eventFromOuter(passed: string){
    this.name = passed;
  }


}
