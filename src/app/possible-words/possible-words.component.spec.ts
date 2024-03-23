import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleWordsComponent } from './possible-words.component';

describe('PossibleWordsComponent', () => {
  let component: PossibleWordsComponent;
  let fixture: ComponentFixture<PossibleWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PossibleWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PossibleWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
