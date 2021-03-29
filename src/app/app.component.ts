import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [ `
  .text-sucess{
    color:green;
    }
    .text-danger{
      color:red;
    }
  ` ]
})
export class AppComponent  {
  name = 'Angular';
  public hasError = true;

  public messageClass={
    "text-sucess":!this.hasError,
    "text-danger":this.hasError
  }
}
