import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * 查看的时候，放开需要的部分就可以了
 */

import { AppComponent } from './pages/basic/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
