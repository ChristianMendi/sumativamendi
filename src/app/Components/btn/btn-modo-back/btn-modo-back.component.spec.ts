import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnModoBackComponent } from './btn-modo-back.component';

describe('BtnModoBackComponent', () => {
  let component: BtnModoBackComponent;
  let fixture: ComponentFixture<BtnModoBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnModoBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnModoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
