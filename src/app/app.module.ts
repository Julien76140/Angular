import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LocationPipePipe } from './location-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailComponent,
    RaceDetailComponent,
    LocationPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
