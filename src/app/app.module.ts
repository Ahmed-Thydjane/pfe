import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CdkStepperModule} from "@angular/cdk/stepper";
import {matStepperAnimations, MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatRadioButton, MatRadioModule} from "@angular/material/radio";
import { PersonnalQuestionComponent } from './personnal-question/personnal-question.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionsComponent,
    SignUpComponent,
    NavbarComponent,
    PersonnalQuestionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CdkStepperModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatInputModule
  ]

})
export class AppModule { }
