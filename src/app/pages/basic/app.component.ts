import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  value1: string = "默认值";
  value2: string = "pink";
  value3: Array<string> = ['中国', '美国', '俄罗斯', '欧盟'];

  doit1(): void {

    console.log('你点击了我~');
    this.value2 = 'yellow';

  }

};
