import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalQuestionComponent } from './personnal-question.component';

describe('PersonnalQuestionComponent', () => {
  let component: PersonnalQuestionComponent;
  let fixture: ComponentFixture<PersonnalQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnalQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
