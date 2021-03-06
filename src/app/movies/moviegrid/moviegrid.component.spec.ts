import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { MovieGridComponent } from './moviegrid.component';

describe('MovieGridComponent', () => {
  let component: MovieGridComponent;
  let fixture: ComponentFixture<MovieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
