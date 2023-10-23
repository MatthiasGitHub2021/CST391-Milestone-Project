import { Injectable } from '@angular/core';
import { Tenant } from '../models/tenants.model';
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class TenantServiceService {

  constructor(private http: HttpClient) {}

  private host = "http://localhost:5000";

  public getTenants(callback: (tenants: Tenant[])=> void): void {
    this.http.get<Tenant[]>(this.host + "/tenants").subscribe((tenants: Tenant[]) => {
      callback(tenants);
    });
  }

  getTenantById(id: number, callback: () => void): void {
    this.http.get(this.host + "/tenants/" + id).subscribe((data) => {
      callback();
    });
  }

  public createTenant(tenant: Tenant, callback: () => void): void {
    this.http.post<Tenant>(this.host + "/tenants", tenant).subscribe((data) => {
      callback();
    });
  }

  public updateTenant(tenant: Tenant, callback: () => void): void {
    this.http.put<Tenant>(this.host + "/tenants", tenant).subscribe((data) => {
      callback();
    });
  }

  public deleteTenant(id: number, callback: () => void): void {
    this.http.delete(this.host + "/tenants/" + id).subscribe((data) => {
      callback();
    });
  }

}
