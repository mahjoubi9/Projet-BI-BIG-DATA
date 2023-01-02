import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbarComponent } from './chartbar.component';

describe('ChartbarComponent', () => {
  let component: ChartbarComponent;
  let fixture: ComponentFixture<ChartbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
