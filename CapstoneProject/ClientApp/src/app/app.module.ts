import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DutyListComponent } from './duty-list/duty-list.component';
import { CreateDutyComponent } from './create-duty/create-duty.component';
import { FullCrudComponent } from './full-crud/full-crud.component';
import { UpdateDutyComponent } from './update-duty/update-duty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DutyListComponent,
    CreateDutyComponent,
    FullCrudComponent,
    UpdateDutyComponent
  ],


  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'duty-list', component: DutyListComponent },
      { path: 'create-duty', component: CreateDutyComponent },
      { path: 'crud', component: FullCrudComponent },
      { path: 'update-duty', component: UpdateDutyComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
