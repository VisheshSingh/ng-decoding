import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NameTagComponent } from './name-tag/name-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameTagComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
