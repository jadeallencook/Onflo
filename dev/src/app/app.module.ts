import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseAuthService } from './services/firebase-auth/firebase-auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { LearnComponent } from './pages/learn/learn.component';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { JsWarningComponent } from './components/js-warning/js-warning.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SolutionsFormComponent } from './components/solutions-form/solutions-form.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ExampleSolutionsComponent } from './components/example-solutions/example-solutions.component';
import { CustomSolutionsComponent } from './components/custom-solutions/custom-solutions.component';

import { WindowRefService } from './services/window-ref/window-ref.service';

// stripe
import { StripeCheckoutModule } from 'ng-stripe-checkout';
import { CustomerComponent } from './pages/customer/customer.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesComponent } from './components/sales/sales.component';
import { AddSaleComponent } from './components/add-sale/add-sale.component';

import { HttpModule } from '@angular/http';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { ChatMsgsComponent } from './pages/messenger/chat-msgs/chat-msgs.component';
import { ChatSenderComponent } from './pages/messenger/chat-sender/chat-sender.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'messenger/:userUID', component: MessengerComponent },
  { path: 'messenger', component: MessengerComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'learn', component: LearnComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'admin', component: AdminComponent },
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
    NavigationComponent,
    SettingsComponent,
    SolutionsFormComponent,
    AdminComponent,
    ExampleSolutionsComponent,
    CustomSolutionsComponent,
    CustomerComponent,
    FinanceComponent,
    ProductsComponent,
    SalesComponent,
    AddSaleComponent,
    MessengerComponent,
    ChatMsgsComponent,
    ChatSenderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    StripeCheckoutModule,
    HttpModule
  ],
  providers: [WindowRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
