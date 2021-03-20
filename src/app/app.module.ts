import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonShortInfoComponent } from './components/person-short-info/person-short-info.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { SubNavigationComponent } from './components/sub-navigation/sub-navigation.component';
import { PersonDataComponent } from './components/person-data/person-data.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AgeService } from './services/age.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonShortInfoComponent,
    MainNavigationComponent,
    SubNavigationComponent,
    PersonDataComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
