import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from '../models/tenants.model';
import { TenantServiceService } from '../service/tenant-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-delete-tenant',
  templateUrl: './delete-tenant.component.html',
  styleUrls: ['./delete-tenant.component.css']
})
export class DeleteTenantComponent {
  @Input() tenant: Tenant | null = null;

constructor(private service: TenantServiceService, private router: Router){}

ngOnInit(){
  console.log("Deleting tenant...");
    this.service.deleteTenant(this.tenant!.tenantId, nothing);
    this.router.navigate(['/']);
    }
  }
function nothing(){}

