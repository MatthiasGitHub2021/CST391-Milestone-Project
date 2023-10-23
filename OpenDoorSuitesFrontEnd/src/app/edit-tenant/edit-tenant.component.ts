import { Component, OnInit, Input } from '@angular/core';
import { Tenant } from '../models/tenants.model';
import { TenantServiceService } from '../service/tenant-service.service';

@Component({
  selector: 'app-edit-tenant',
  templateUrl: './edit-tenant.component.html',
  styleUrls: ['./edit-tenant.component.css']
})
export class EditTenantComponent implements OnInit {
  @Input() tenant: Tenant | null = null;

  wasSubmitted: boolean = false;

  constructor(private service: TenantServiceService) { }

  ngOnInit() {}

  public onSubmit() {
    //This has some kind of bug that update will not work in the API. Had to use create.
    this.service.updateTenant(this.tenant!, this.nothing);
    //this.service.createTenant(this.tenant!, this.nothing);
    //console.log("The return from updateTenant() was " + status);
    this.wasSubmitted = true;
  }
  //filler for createTenant
  nothing(){}
}

