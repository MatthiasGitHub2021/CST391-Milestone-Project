export const tenantQueries = {
    readTenants: `
        SELECT
            id as tenantId, name as name, profession as profession, description as description, phone as phone, 
            image as image, suite as suite, serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
        FROM tenantsdb.tenantstable
    `,
    readTenantsByProfession: `
        SELECT
            id as tenantId, name as name, profession as profession, 
            description as description, phone as phone, image as image, suite as suite, 
            serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
        FROM tenantsdb.tenantstable
        WHERE tenants.tenantstable.profession = ?
    `,
    readTenantsByProfessionSearch: `
    SELECT
        id as tenantId, name as name, profession as profession, 
        description as description, phone as phone, image as image, suite as suite, 
        serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
    FROM tenantsdb.tenantstable
    WHERE tenantsdb.tenantstable.profession LIKE ?
    `,
    readTenantsByDescriptionSearch: `
    SELECT
        id as tenantId, name as name, profession as profession, 
        description as description, phone as phone, image as image, suite as suite,
        serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
    FROM tenantsdb.tenantstable
    WHERE tenantsdb.tenantstable.description like ?
    `,
    readTenantsByTenantId: `
    SELECT
        id as tenantId, name as name, profession as profession, 
        description as description, phone as phone, image as image, suite as suite, 
        serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
    FROM tenantsdb.tenantstable
    WHERE tenantsdb.tenantstable.id = ?
    `,
    createTenant: `
    INSERT INTO tenantstable(name, profession, description, phone, image, suite, serviceOne, serviceTwo, serviceThree) VALUES (?,?,?,?,?,?,?,?,?)
    `,
    updateTenant: `
    UPDATE tenantsdb.tenantstable
    SET name = ?, profession = ?, phone = ?, image = ?, description = ?, suite = ?, serviceOne = ?, serviceTwo = ?, serviceThree = ? 
    WHERE id = ?
    `,
    deleteTenant: `
    DELETE FROM tenantsdb.tenantstable
    WHERE id = ?
    `,
}