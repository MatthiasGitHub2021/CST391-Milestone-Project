import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTenantComponent } from './edit-tenant.component';

describe('EditTenantComponent', () => {
  let component: EditTenantComponent;
  let fixture: ComponentFixture<EditTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTenantComponent]
    });
    fixture = TestBed.createComponent(EditTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
