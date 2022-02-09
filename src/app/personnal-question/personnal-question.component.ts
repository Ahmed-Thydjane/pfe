import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-personnal-question',
  templateUrl: './personnal-question.component.html',
  styleUrls: ['./personnal-question.component.scss']
})
export class PersonnalQuestionComponent implements OnInit {

  public FormGroup_education: FormGroup;
  public FormGroup_gender: FormGroup;
  public FormGroup_age: FormGroup;
  public FormGroup_urban: FormGroup;
  public FormGroup_engnat: FormGroup;
  public FormGroup_hand: FormGroup;
  public FormGroup_religion: FormGroup;
  public FormGroup_orientation: FormGroup;
  public FormGroup_race: FormGroup;
  public FormGroup_voted: FormGroup;
  public FormGroup_married: FormGroup;
  public FormGroup_familySize: FormGroup;
  public FormGroup_major: FormGroup;
  public FormGroup_name: FormGroup;

  constructor(private fb: FormBuilder) {

    this.FormGroup_education = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_gender = this.fb.group({
      resp: fb.control('', [Validators.required])
    });


    this.FormGroup_age = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_urban = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_engnat = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_orientation = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_religion = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_race = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_age = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_hand = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_familySize = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_married = this.fb.group({
      resp: fb.control('', [Validators.required])
    });
    
    this.FormGroup_major = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_voted = this.fb.group({
      resp: fb.control('', [Validators.required])
    });

    this.FormGroup_name = this.fb.group({
      resp: fb.control('', [Validators.required])
    });
  }
  isLinear = false;

  ngOnInit(): void {
  }

}
