import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeclinarComponent } from './btn-declinar.component';

describe('BtnDeclinarComponent', () => {
  let component: BtnDeclinarComponent;
  let fixture: ComponentFixture<BtnDeclinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDeclinarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnDeclinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
