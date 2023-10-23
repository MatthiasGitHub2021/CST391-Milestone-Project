import { Component, Input } from '@angular/core';
import { Tenant } from '../models/tenants.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-tenant',
  templateUrl: './read-tenant.component.html',
  styleUrls: ['./read-tenant.component.css']
})

export class ReadTenantComponent {
  @Input() tenant: Tenant | null = null;

  selectedTenant: Tenant | null = null;
  editTenant: Tenant | null = null;
  deleteTenant: Tenant | null = null;

constructor(private router: Router){}

  public onDeleteTenant(tenant: Tenant){
    this.deleteTenant = tenant;
  }

  public onEditTenant(tenant: Tenant){
    this.editTenant = tenant;
  }
}
