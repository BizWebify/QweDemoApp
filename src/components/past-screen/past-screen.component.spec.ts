import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastScreenComponent } from './past-screen.component';

describe('PastScreenComponent', () => {
  let component: PastScreenComponent;
  let fixture: ComponentFixture<PastScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
