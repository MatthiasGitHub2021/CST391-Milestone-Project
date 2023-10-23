import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTenantComponent } from './delete-tenant.component';

describe('DeleteTenantComponent', () => {
  let component: DeleteTenantComponent;
  let fixture: ComponentFixture<DeleteTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTenantComponent]
    });
    fixture = TestBed.createComponent(DeleteTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
