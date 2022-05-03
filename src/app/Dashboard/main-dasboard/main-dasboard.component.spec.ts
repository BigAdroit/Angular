import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDasboardComponent } from './main-dasboard.component';

describe('MainDasboardComponent', () => {
  let component: MainDasboardComponent;
  let fixture: ComponentFixture<MainDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
