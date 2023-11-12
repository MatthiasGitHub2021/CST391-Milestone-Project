import React from 'react';
import SearchForm from './SearchForm';
import TenantList from './TenantList';


/*
    Parent component to SearchForm, TenantList. Passes their props App.js
    An important aspect to note is 'updateSingleTenant' is passed as onClick to the 'TenantList' component
*/
const SearchTenant = (props) => {
    console.log('Props with update single Tenant ', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults}/>
            <TenantList tenantList={props.tenantList} onClick={props.updateSingleTenant}/>
        </div>
    );
};

export default SearchTenant;