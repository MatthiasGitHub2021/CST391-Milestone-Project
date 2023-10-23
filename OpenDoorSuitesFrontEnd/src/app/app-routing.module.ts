import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { ReadTenantComponent } from './read-tenant/read-tenant.component';
import { EditTenantComponent } from './edit-tenant/edit-tenant.component';
import { DeleteTenantComponent } from './delete-tenant/delete-tenant.component';
import { ListTenantsComponent } from './list-tenants/list-tenants.component';

const routes: Routes = [
  { path: 'create', component: CreateTenantComponent},
  { path: 'list-tenants', component: ListTenantsComponent},
  { path: 'edit-tenants/', component: EditTenantComponent},
  { path: 'read-tenants', component: ReadTenantComponent},
  { path: 'delete-tenants', component: DeleteTenantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
