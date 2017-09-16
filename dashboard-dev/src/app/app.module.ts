import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { LearnComponent } from './pages/learn/learn.component';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { JsWarningComponent } from './components/js-warning/js-warning.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolutionsComponent,
    AnalyticsComponent,
    LearnComponent,
    BreadcrumComponent,
    JsWarningComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
