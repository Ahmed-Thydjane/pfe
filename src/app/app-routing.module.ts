import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnalQuestionComponent } from './personnal-question/personnal-question.component';
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  {path:"questions" , component:QuestionsComponent},
  {path:"personnal_questions", component:PersonnalQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
