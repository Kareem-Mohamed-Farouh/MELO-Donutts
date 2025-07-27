import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinabonComponent } from './sinabon.component';

describe('SinabonComponent', () => {
  let component: SinabonComponent;
  let fixture: ComponentFixture<SinabonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinabonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinabonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
