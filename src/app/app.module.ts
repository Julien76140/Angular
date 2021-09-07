import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LocationPipePipe } from './location-pipe.pipe';
import { AddPoneyComponent } from './add-poney/add-poney.component';
import { MenuComponent } from './menu/menu.component';

const ROUTES: Routes=[
  {path:'',component: PoniesComponent},
  {path:'races',component: RacesComponent},
  {path:'add-pony',component: AddPoneyComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailComponent,
    RaceDetailComponent,
    LocationPipePipe,
    AddPoneyComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
