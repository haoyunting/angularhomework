import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildlistComponent } from './components/childlist/childlist.component';
import { ChildinputComponent } from './components/childinput/childinput.component';
import { ParentComponent } from './components/parent/parent.component';
import{CommonService}from './services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    ChildlistComponent,
    ChildinputComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
