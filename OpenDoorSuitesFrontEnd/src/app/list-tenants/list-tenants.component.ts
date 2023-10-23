import { Component, Input, OnInit } from '@angular/core';
import { TenantServiceService } from '../service/tenant-service.service';
import { Tenant } from '../models/tenants.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tenants',
  templateUrl: './list-tenants.component.html',
  styleUrls: ['./list-tenants.component.css']
})

export class ListTenantsComponent {
  @Input() tenants: Tenant | null = null;
  tenant: Tenant[] = [];
  selectedTenant: Tenant | undefined;

  constructor(private service: TenantServiceService) {}

  ngOnInit(){
    console.log("Getting tenants...");
    this.service.getTenants((tenant: Tenant[]) => {
      this.tenant = tenant;
      console.log('this.tenant', tenant);
    })
  }

  public onSelectedTenant(tenant: Tenant){
    this.selectedTenant = tenant;
  }
}
