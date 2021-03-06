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
import { AddRaceComponent } from './add-race/add-race.component';
import { ReactiveFormsModule} from "@angular/forms";
import { AddPonyReactComponent } from './add-pony-react/add-pony-react.component';
import { HttpClientModule } from "@angular/common/http";
import {PickListModule} from "primeng/picklist";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {OrderListModule} from "primeng/orderlist";
import {MegaMenuModule} from "primeng/megamenu";
import {TabMenuModule} from "primeng/tabmenu";
import {InputNumberModule} from "primeng/inputnumber";
import {UserGuard} from "./user.guard";

const ROUTES: Routes=[
  {path:'',component: PoniesComponent},
  {path:'races',component: RacesComponent},
  {path:'add-pony',component: AddPonyReactComponent,canActivate: [UserGuard]},
  {path:'add-race',component: AddRaceComponent,canActivate: [UserGuard]},
  {path:'update-pony/:id',component: AddPoneyComponent,canActivate: [UserGuard]},
  {path:'update-race/:id',component: AddRaceComponent,canActivate: [UserGuard]},
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
    MenuComponent,
    AddRaceComponent,
    AddPonyReactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
    PickListModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    OrderListModule,
    MegaMenuModule,
    TabMenuModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
