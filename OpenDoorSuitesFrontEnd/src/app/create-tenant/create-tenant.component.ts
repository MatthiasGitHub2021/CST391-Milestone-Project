import { Component, OnInit } from '@angular/core';
import { Tenant } from '../models/tenants.model';
import { TenantServiceService } from '../service/tenant-service.service';

@Component({
  selector: 'app-create-tenant',
  templateUrl: './create-tenant.component.html',
  styleUrls: ['./create-tenant.component.css']
})

export class CreateTenantComponent implements OnInit {
  tenant: Tenant = {
    tenantId: Math.floor(Math.random() * 1000000),
    name: '',
    profession: '',
    description: '',
    phone: '',
    image: '',
    suite: 0,
    serviceOne: '',
    serviceTwo: '',
    serviceThree: ''
  };

  wasSubmitted: boolean = false;

  constructor(private service: TenantServiceService) { }

  ngOnInit() {}

  public onSubmit() {

    let status = this.service.createTenant(this.tenant, this.nothing);
    console.log("The return from createTenant() was " + status);
    this.wasSubmitted = true;
  }
  //filler for createAlbum
  nothing(){}
}
