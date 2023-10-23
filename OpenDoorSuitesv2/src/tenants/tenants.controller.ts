import { Request, RequestHandler, Response } from "express";
import * as TenantDao from './tenants.dao';
import { OkPacket } from "mysql";
import { Tenant } from "./tenants.model";

export const readTenants: RequestHandler = async (req: Request, res: Response) => {
    try{
        let tenants;
        let tenantId = parseInt(req.query.tenantId as string);

        console.log('tenantId', tenantId);
        if(Number.isNaN(tenantId)) {
            tenants = await TenantDao.readTenants();            
        } else {
            tenants = await TenantDao.readTenantsByTenantId(tenantId);
        }
        //await readServicesOffered(tenants, res);

        res.status(200).json(
            tenants
        );
    } catch (error) {
        console.error('[tenants.controller][readTenants][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Tenants.'
        });
    }
};

export const readTenantsByProfession: RequestHandler =async (req:Request, res:Response) => {
    try{
        const tenants = await TenantDao.readTenantsByProfession(req.params.profession);

        await readServicesOffered(tenants, res);

        res.status(200).json(
            tenants
            );
    } catch (error) {
        console.error('[tenants.controller][readTenants][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Tenants.'
        });
    }
}

export const readTenantsByProfessionSearch: RequestHandler =async (req: Request, res:Response) => {
    try{
        console.log('search', req.params.search);
        const tenants = await TenantDao.readTenantsByProfessionSearch('%' + req.params.search + '%');

        await readServicesOffered(tenants, res);

        res.status(200).json(
            tenants
            );
    } catch (error) {
        console.error('[tenants.controller][readTenants][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Tenants.'
        });
    }
}

export const readTenantsByDescriptionSearch: RequestHandler =async (req: Request, res:Response) => {
    try{
        console.log('search', req.params.search);
        const tenants = await TenantDao.readTenantsByDescriptionSearch('%' + req.params.search + '%');

        await readServicesOffered(tenants, res);
        
        res.status(200).json(
            tenants
            );
    } catch (error) {
        console.error('[tenants.controller][readTenants][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching Tenants.'
        });
    }
}


export const createTenant: RequestHandler =async (req: Request, res: Response) => {
    try{
        const okPacket: OkPacket = await TenantDao.createTenant(req.body);
        
        console.log('req.body', req.body);
        console.log('tenant', okPacket);

        //error: Cannot read properties of undefined
       /* req.body.servicesOffered.forEach(async (servicesOffered: ServicesOffered, index: number) => {
            try{
                await ServicesOfferedDao.createServicesOffered(servicesOffered, index, okPacket.insertId);
            }catch (error){
                console.error('[Tenants.controller][createTenantServicesOfferedDao][Error]', error);
                res.status(500).json({
                    message: 'There was an error when writing Tenant ServicesOfferedDao'
                });
            }
        });
        */
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[Tenants.controller][createTenant][Error]', error);
        res.status(500).json({
            message: 'There was an error writing Tenants.'
        });
    }
};

export const updateTenant: RequestHandler =async (req: Request, res:Response) => {
    try{
        const okPacket: OkPacket = await TenantDao.updateTenant(req.body);        
        console.log('req.body', req.body);
        console.log('Tenant', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[Tenants.controller][updateTenant][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating Tenants.'
        });
    }
};

async function readServicesOffered(tenants: Tenant[], res: Response<any, Record<string, any>>){
    for(let i = 0; i < tenants.length; i++){
        try {
            //const servicesOffered = await ServicesOfferedDao.readServicesOffered(tenants[i].tenantId);
            //tenants[i].servicesOne = servicesOffered;

        }catch (error){
            console.error('[Tenants.controller][readServicesOffered][Error]', error);
            res.status(500).json({
                message: 'There was an error when fetching Tenant ServicesOffered'
            });
        }
    }
}

export const deleteTenant: RequestHandler =async (req:Request, res: Response) => {
    try{
        let tenantId = parseInt(req.params.tenantId as string);

        console.log('tenantId', tenantId);
        if (!Number.isNaN(tenantId)){
            const response = await TenantDao.deleteTenant(tenantId);

            res.status(200).json(
                response
            );
        }else{
            throw new Error("Integer expected for TenantId");
        }

    }catch (error){
        console.error('[tenants.controller][deleteTenant][Error]', error);
        res.status(500).json({
            message: 'There was an error when deleting Tenants.'
        });
    }
};