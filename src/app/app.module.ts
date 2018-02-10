import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogListComponent } from './dogs/dog-list/dog-list.component';
import { DogItemComponent } from './dogs/dog-list/dog-item/dog-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogListComponent,
    DogItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
