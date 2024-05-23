import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCallbakComponentComponent } from './login-callbak-component.component';

describe('LoginCallbakComponentComponent', () => {
  let component: LoginCallbakComponentComponent;
  let fixture: ComponentFixture<LoginCallbakComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginCallbakComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCallbakComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
