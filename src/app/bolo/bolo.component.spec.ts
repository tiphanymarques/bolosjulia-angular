import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloComponent } from './bolo.component';

describe('BoloComponent', () => {
  let component: BoloComponent;
  let fixture: ComponentFixture<BoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
