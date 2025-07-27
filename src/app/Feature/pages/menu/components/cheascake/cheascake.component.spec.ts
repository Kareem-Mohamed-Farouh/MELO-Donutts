import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheascakeComponent } from './cheascake.component';

describe('CheascakeComponent', () => {
  let component: CheascakeComponent;
  let fixture: ComponentFixture<CheascakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheascakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheascakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
