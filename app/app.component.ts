import { Component } from '@angular/core';

@Component({
  selector: 'banking-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
