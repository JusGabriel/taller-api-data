import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JokePage } from './joke.page';

describe('JokePage', () => {
  let component: JokePage;
  let fixture: ComponentFixture<JokePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
