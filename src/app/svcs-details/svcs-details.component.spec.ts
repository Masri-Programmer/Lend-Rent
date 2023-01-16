import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcsDetailsComponent } from './svcs-details.component';

describe('SvcsDetailsComponent', () => {
  let component: SvcsDetailsComponent;
  let fixture: ComponentFixture<SvcsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvcsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvcsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
