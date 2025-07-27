import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutstoryComponent } from './aboutstory.component';

describe('AboutstoryComponent', () => {
  let component: AboutstoryComponent;
  let fixture: ComponentFixture<AboutstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutstoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
