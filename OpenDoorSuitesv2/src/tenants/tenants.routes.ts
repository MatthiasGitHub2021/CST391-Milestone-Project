import { Router } from "express";
import * as TenantsController from './tenants.controller';

const router = Router();
    
    //get professions
    router.
    route('/tenants/:profession').
    get(TenantsController.readTenantsByProfession);
    
    //Get Tenants
    router.
    route('/tenants').
    get(TenantsController.readTenants);

    //get profession search
    router.
    route('/tenants/search/profession/:search').
    get(TenantsController.readTenantsByProfessionSearch);
    
    //get Tenants by description
    router.
    route('/tenants/search/description/:search').
    get(TenantsController.readTenantsByDescriptionSearch);

    //create tenant
    router.
    route('/tenants').
    post(TenantsController.createTenant);

    //update Tenant
    router.
    route('/tenants').
    put(TenantsController.updateTenant);
    
    //delete Tenant by id
    router.
    route('/tenants/:tenantId').
    delete(TenantsController.deleteTenant);

export default router;