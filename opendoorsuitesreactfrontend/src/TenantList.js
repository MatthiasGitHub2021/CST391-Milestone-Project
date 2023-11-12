import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

/*
    Child component to SearchTenant that loads all tenant(<Cards/>) on main page.
    TenantList has an intermediate callback method on line 16. Intermediate methods (a method that 
            calls its parent and that is also provided to a child component) are not necessary 
            and this one should be factored out. The ultimate child component can callback through 
            many arbitrary ancestor levels. The top-level method just needs to be set in an attribute 
            at each level of the component chain. Regardless of this, you can see the parameter list on line 18 is complete.
*/
const TenantList = (props) => {
    
    //Set props onClick
    const handleSelectionOne = (tenantId, uri) => {
        console.log('Selected ID is ' + tenantId);
        props.onClick(tenantId, navigator, uri);
    };

    const handleDelete = async (tenantId) => {
        let response = await dataSource.delete('/tenants/' + tenantId);
        console.log(response);
        console.log(response.data);
        window.location.reload(false);
    }

    console.log('props tenantList', props);
    //used to called navigate in onClick handler in App.js
    const navigator = useNavigate();
    const tenants = props.tenantList.map((tenant) => {
        return (
            <Card
            key={tenant.tenantId}
            tenantId={tenant.tenantId}
            tenantName={tenant.name}
            tenantDescription={tenant.description}
            tenantPhone={tenant.phone}
            tenantSuite={tenant.suite}
            buttonText='Update'
            imgURL={tenant.image}
            onClick={handleSelectionOne}
            onDelete={handleDelete}           
            />
        );
    });
    return <div className='container'>{tenants}</div>;
};

export default TenantList;

