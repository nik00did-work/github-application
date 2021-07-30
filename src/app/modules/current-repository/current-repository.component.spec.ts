import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRepositoryComponent } from './current-repository.component';

describe('CurrentRepositoryComponent', () => {
  let component: CurrentRepositoryComponent;
  let fixture: ComponentFixture<CurrentRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRepositoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
