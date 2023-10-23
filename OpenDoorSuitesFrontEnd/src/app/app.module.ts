import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTenantsComponent } from './list-tenants/list-tenants.component';
import { CreateTenantComponent } from './create-tenant/create-tenant.component';
import { EditTenantComponent } from './edit-tenant/edit-tenant.component';
import { DeleteTenantComponent } from './delete-tenant/delete-tenant.component';
import { ReadTenantComponent } from './read-tenant/read-tenant.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListTenantsComponent,
    CreateTenantComponent,
    EditTenantComponent,
    DeleteTenantComponent,
    ReadTenantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
