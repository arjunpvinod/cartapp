import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcheditComponent } from './searchedit.component';

describe('SearcheditComponent', () => {
  let component: SearcheditComponent;
  let fixture: ComponentFixture<SearcheditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcheditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcheditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
