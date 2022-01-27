import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDutyComponent } from './create-duty.component';

describe('CreateDutyComponent', () => {
  let component: CreateDutyComponent;
  let fixture: ComponentFixture<CreateDutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
