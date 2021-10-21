import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsereComponent } from './insere.component';

describe('InsereComponent', () => {
  let component: InsereComponent;
  let fixture: ComponentFixture<InsereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
