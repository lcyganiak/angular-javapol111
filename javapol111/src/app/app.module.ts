import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { XdPipe } from './xd.pipe';
import { ToLongPipe } from './to-long.pipe';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    XdPipe,
    ToLongPipe,
    Item1Component,
    Item2Component,
    Item3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
