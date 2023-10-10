import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  loggedDat: any;
  constructor() {
    const loggedData = localStorage.getItem('zomatoUser');
    debugger;
    if(loggedData != null) {
      const data = JSON.parse(loggedData);
      this.loggedDat = data; 
    }
  }

  logoff() {
    localStorage.removeItem('zomatoUser');
    this.loggedDat = undefined;
  }
}
