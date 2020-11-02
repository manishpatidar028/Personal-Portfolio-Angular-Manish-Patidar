import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAndCurricularactivityComponent } from './awards-and-curricularactivity.component';

describe('AwardsAndCurricularactivityComponent', () => {
  let component: AwardsAndCurricularactivityComponent;
  let fixture: ComponentFixture<AwardsAndCurricularactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardsAndCurricularactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsAndCurricularactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
