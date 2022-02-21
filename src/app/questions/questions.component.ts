import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "../message/message.service";
import { PersonnalQuestionComponent } from '../personnal-question/personnal-question.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup ;
  public thirdFormGroup: FormGroup;
  public forthFormGroup: FormGroup;
  private data:any;


  constructor(private fb: FormBuilder,
    private mess: MessageService,
    private inf:PersonnalQuestionComponent) {

    this.firstFormGroup = this.fb.group({
      q1: fb.control('', [Validators.required]),
      q2: fb.control('', [Validators.required]),
      q3: fb.control('', [Validators.required]),
      q4: fb.control('', [Validators.required]),
      q5: fb.control('', [Validators.required]),
      q6: fb.control('', [Validators.required]),
      q7: fb.control('', [Validators.required]),
      q8: fb.control('', [Validators.required]),
      q9: fb.control('', [Validators.required]),
      q10: fb.control('', [Validators.required])
    });

    this.secondFormGroup = this.fb.group({
      q11: fb.control('', [Validators.required]),
      q12: fb.control('', [Validators.required]),
      q13: fb.control('', [Validators.required]),
      q14: fb.control('', [Validators.required]),
      q15: fb.control('', [Validators.required]),
      q16: fb.control('', [Validators.required]),
      q17: fb.control('', [Validators.required]),
      q18: fb.control('', [Validators.required]),
      q19: fb.control('', [Validators.required]),
      q20: fb.control('', [Validators.required]),
    });

    this.thirdFormGroup = this.fb.group({
      q21: fb.control('', [Validators.required]),
      q22: fb.control('', [Validators.required]),
      q23: fb.control('', [Validators.required]),
      q24: fb.control('', [Validators.required]),
      q25: fb.control('', [Validators.required]),
      q26: fb.control('', [Validators.required]),
      q27: fb.control('', [Validators.required]),
      q28: fb.control('', [Validators.required]),
      q29: fb.control('', [Validators.required]),
      q30: fb.control('', [Validators.required]),
    });

    this.forthFormGroup = this.fb.group({
      q31: fb.control('', [Validators.required]),
      q32: fb.control('', [Validators.required]),
      q33: fb.control('', [Validators.required]),
      q34: fb.control('', [Validators.required]),
      q35: fb.control('', [Validators.required]),
      q36: fb.control('', [Validators.required]),
      q37: fb.control('', [Validators.required]),
      q38: fb.control('', [Validators.required]),
      q39: fb.control('', [Validators.required]),
      q40: fb.control('', [Validators.required]),
      q41: fb.control('', [Validators.required]),
      q42: fb.control('', [Validators.required]),
    });
  }
  isLinear = false;

  ngOnInit() {

  }

  doTest(){
    
   
    const obj1=this.firstFormGroup.value;
    const obj2=this.secondFormGroup.value;
    const obj3=this.thirdFormGroup.value;
    const obj4=this.forthFormGroup.value;
    let data=[
      this.firstFormGroup.value.q1,
      this.firstFormGroup.value.q2,
      this.firstFormGroup.value.q3,
      this.firstFormGroup.value.q4,
      this.firstFormGroup.value.q5,
      this.firstFormGroup.value.q6,
      this.firstFormGroup.value.q7,
      this.firstFormGroup.value.q8,
      this.firstFormGroup.value.q9,
      this.firstFormGroup.value.q10,
      this.secondFormGroup.value.q11,
      this.secondFormGroup.value.q12,
      this.secondFormGroup.value.q13,
      this.secondFormGroup.value.q14,
      this.secondFormGroup.value.q15,
      this.secondFormGroup.value.q16,
      this.secondFormGroup.value.q17,
      this.secondFormGroup.value.q18,
      this.secondFormGroup.value.q19,
      this.secondFormGroup.value.q20,
      this.thirdFormGroup.value.q21,
      this.thirdFormGroup.value.q22,
      this.thirdFormGroup.value.q23,
      this.thirdFormGroup.value.q24,
      this.thirdFormGroup.value.q25,
      this.thirdFormGroup.value.q26,
      this.thirdFormGroup.value.q27,
      this.thirdFormGroup.value.q28,
      this.thirdFormGroup.value.q29,
      this.thirdFormGroup.value.q30,
      this.forthFormGroup.value.q31,
      this.forthFormGroup.value.q32,
      this.forthFormGroup.value.q33,
      this.forthFormGroup.value.q34,
      this.forthFormGroup.value.q35,
      this.forthFormGroup.value.q36,
      this.forthFormGroup.value.q37,
      this.forthFormGroup.value.q38,
      this.forthFormGroup.value.q39,
      this.forthFormGroup.value.q40,
      this.forthFormGroup.value.q41,
      this.forthFormGroup.value.q42,
      this.inf.FormGroup_age.value.resp,
      this.inf.FormGroup_education.value.resp,
      this.inf.FormGroup_engnat.value.resp,
      this.inf.FormGroup_familySize.value.resp,
      this.inf.FormGroup_gender.value.resp,
      this.inf.FormGroup_hand.value.resp,
      this.inf.FormGroup_major.value.resp,
      this.inf.FormGroup_married.value.resp,
      this.inf.FormGroup_name.value.resp,
      this.inf.FormGroup_orientation.value.resp,
      this.inf.FormGroup_race.value.resp,
      this.inf.FormGroup_religion.value.resp,
      this.inf.FormGroup_urban.value.resp,
      this.inf.FormGroup_voted.value.resp

     ];
    data=data.map(Number);
    console.log(data)
    

  }

  getresult(){
    
    const obj1=this.secondFormGroup.value;
    const obj2=this.secondFormGroup.value;
    const obj3=this.thirdFormGroup.value;
    const obj4=this.forthFormGroup.value;
    
    

  }
}
