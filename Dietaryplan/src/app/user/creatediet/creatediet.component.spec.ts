import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedietComponent } from './creatediet.component';

describe('CreatedietComponent', () => {
  let component: CreatedietComponent;
  let fixture: ComponentFixture<CreatedietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
