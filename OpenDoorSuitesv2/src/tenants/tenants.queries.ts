export const tenantQueries = {
    readTenants: `
        SELECT
        tenantId as tenantId, name as name, profession as profession, description as description, phone as phone, 
            image as image, suite as suite, serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
        FROM tenantsdb.tenantstable
    `,
    readTenantsByProfession: `
        SELECT
        tenantId as tenantId, name as name, profession as profession, 
            description as description, phone as phone, image as image, suite as suite, 
            serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
        FROM tenantsdb.tenantstable
        WHERE tenantsdb.tenantstable.profession = ?
    `,
    readTenantsByProfessionSearch: `
    SELECT
    tenantId as tenantId, name as name, profession as profession, 
        description as description, phone as phone, image as image, suite as suite, 
        serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
    FROM tenantsdb.tenantstable
    WHERE tenantsdb.tenantstable.profession LIKE ?
    `,
    readTenantsByDescriptionSearch: `
    SELECT
    tenantId as tenantId, name as name, profession as profession, 
        description as description, phone as phone, image as image, suite as suite,
        serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
    FROM tenantsdb.tenantstable
    WHERE tenantsdb.tenantstable.description like ?
    `,
    readTenantsByTenantId: `
    SELECT
        tenantId as tenantId, name as name, profession as profession, 
        description as description, phone as phone, image as image, suite as suite, 
        serviceOne as serviceOne, serviceTwo as serviceTwo, serviceThree as serviceThree
    FROM tenantsdb.tenantstable
    WHERE tenantsdb.tenantstable.tenantId = ?
    `,
    createTenant: `
    INSERT INTO tenantstable(name, profession, description, phone, image, suite, serviceOne, serviceTwo, serviceThree) VALUES (?,?,?,?,?,?,?,?,?)
    `,
    updateTenant: `UPDATE tenantsdb.tenantstable SET tenantId=?,name=?,profession=?,description=?,phone=?,image=?,suite=?,serviceOne=?,serviceTwo=?,serviceThree=? WHERE tenantId=?`,
    
    /*updateTenant: `UPDATE tenantsdb.tenantstable
    SET tenantId = :tenantId, name = :name, profession = :profession, description = :description, phone = :phone, image = :image, suite = :suite, serviceOne = :serviceOne, serviceTwo = :serviceTwo, serviceThree = :serviceThree
    WHERE tenantId = :tenantId`
    */
    deleteTenant: `
    DELETE FROM tenantsdb.tenantstable
    WHERE tenantId = ?
    `,
}