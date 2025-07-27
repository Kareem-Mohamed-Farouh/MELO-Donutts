import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrevagesComponent } from './brevages.component';

describe('BrevagesComponent', () => {
  let component: BrevagesComponent;
  let fixture: ComponentFixture<BrevagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrevagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrevagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
