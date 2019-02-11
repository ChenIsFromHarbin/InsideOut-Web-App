import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { SummaryComponent } from './summary/summary.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, 
         MatIconModule, 
         MatFormFieldModule, 
         MatInputModule, 
         MatButtonModule,
         MatMenuModule,
         MatCardModule,
         MatListModule,
         MatExpansionModule,
         MatSortModule,
         MatTableModule } from '@angular/material';
import { UpdateComponent } from './update/update.component';
import { ResultComponent } from './result/result.component';
import { DetailComponent } from './detail/detail.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    TeamComponent,
    SummaryComponent,
    UpdateComponent,
    ResultComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
