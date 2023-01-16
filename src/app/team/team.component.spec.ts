import { ComponentFixture, TestBed } from '@angular/core/testing';

import { teamComponent } from './team.component';

describe('teamComponent', () => {
  let component: teamComponent;
  let fixture: ComponentFixture<teamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ teamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(teamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
