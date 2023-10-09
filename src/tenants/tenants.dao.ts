import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Tenant } from "./tenants.model";
import { tenantQueries} from "./tenants.queries";

export const readTenants = async() => {
    return execute<Tenant[]>(tenantQueries.readTenants, []);
};

export const readTenantsByProfession =async (professionName:string) => {
    return execute<Tenant[]>(tenantQueries.readTenantsByProfession, [professionName]);
}

export const readTenantsByProfessionSearch =async (search:string) => {
    console.log('search param', search);
    return execute<Tenant[]>(tenantQueries.readTenantsByProfessionSearch, [search]);
}

export const readTenantsByDescriptionSearch =async (search:string) => {
    console.log('search param', search);
    return execute<Tenant[]>(tenantQueries.readTenantsByDescriptionSearch, [search]);
}

export const readTenantsByTenantId =async (tenantId:number) => {
    return execute<Tenant[]>(tenantQueries.readTenantsByTenantId, [tenantId]);
}

export const createTenant =async (tenant:Tenant) => {
    return execute<OkPacket>(tenantQueries.createTenant,
        [tenant.name, tenant.profession, tenant.description, tenant.phone, tenant.image, tenant.suite, tenant.serviceOne, tenant.serviceTwo, tenant.serviceThree]);
}

export const updateTenant =async (tenant:Tenant) => {
    return execute<OkPacket>(tenantQueries.updateTenant,
        [tenant.name, tenant.profession, tenant.phone, tenant.image, tenant.description, tenant.suite, tenant.tenantId, tenant.serviceOne, tenant.serviceTwo, tenant.serviceThree]);
}

export const deleteTenant =async (tenantId:number) => {
    return execute<OkPacket>(tenantQueries.deleteTenant, [tenantId]);
}
