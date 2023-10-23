import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTenantComponent } from './read-tenant.component';

describe('ReadTenantComponent', () => {
  let component: ReadTenantComponent;
  let fixture: ComponentFixture<ReadTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadTenantComponent]
    });
    fixture = TestBed.createComponent(ReadTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
