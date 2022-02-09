import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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


  constructor(private fb: FormBuilder) {

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
    console.log(this.firstFormGroup.value);
  }
}
