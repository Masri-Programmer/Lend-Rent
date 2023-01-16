import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvcsComponent } from './svcs.component';

describe('SvcsComponent', () => {
  let component: SvcsComponent;
  let fixture: ComponentFixture<SvcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
