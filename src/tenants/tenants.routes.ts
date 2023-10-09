import { Router } from "express";
import * as TenantsController from './tenants.controller';

const router = Router();
    
    //get professions
    router.
    route('/Tenants/:profession').
    get(TenantsController.readTenantsByProfession);
    
    //Get Tenants
    router.
    route('/Tenants').
    get(TenantsController.readTenants);

    //get profession search
    router.
    route('/Tenants/search/profession/:search').
    get(TenantsController.readTenantsByProfessionSearch);
    
    //get Tenants by description
    router.
    route('/Tenants/search/description/:search').
    get(TenantsController.readTenantsByDescriptionSearch);

    //create tenant
    router.
    route('/Tenants').
    post(TenantsController.createTenant);

    //update Tenant
    router.
    route('/Tenants').
    put(TenantsController.updateTenant);
    
    //delete Tenant by id
    router.
    route('/Tenants/:tenantId').
    delete(TenantsController.deleteTenant);

export default router;