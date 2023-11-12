import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchTenant from './SearchTenant';
import NavBar from './NavBar';
import './App.css';
import dataSource from './dataSource';
import EditTenant from './EditTenant';
import OneTenant from './OneTenant';

/*
    Main component. Manages all states. Loads all Tenants from server.
    Renders different views based on user interactions.

*/
const App = () => {
    // [current state, function to update state()] = ('string'), ([array]), (int)
    const [searchPhrase, setSearchPhrase] = useState('');
    const [tenantList, setTenantList] = useState([]);
    const [currentlySelectedTenantId, setCurrentlySelectTenantId] = useState(0);
    let refresh = false;

    //Called from useEffect to rerender the tenantList with async data from server
    const loadTenants = async () => {
        const response = await dataSource.get('/tenants');
        //rerender tenantList with this data
        setTenantList(response.data);
    }
        
    //This is the main call to start loading the tenant. When App starts/is mounted to index.js
    useEffect(() => {
        //Update the album list
        loadTenants();
    }, [refresh]);
    
    //search function that updates search phrase hook.
    const updateSearchResults = (phrase) => {
        console.log('Phrase is ' + phrase);
        setSearchPhrase(phrase);
    };

    /*
     Updates the currently selected tenant and navigates to its details page.
     URI = Uniform Resource Identifier = string that identifies a URL (typically)

    */
    const updateSingleTenant = (tenantId, navigate, uri) => {
        console.log('Update Single Tenant = ', tenantId);
        console.log('Update Single Tenant = ', navigate);
        // Iterate through the tenantList to find the index of the selected album
        var indexNumber = 0;
        for (var i = 0; i < tenantList.length; i++){
            if(tenantList[i].tenantId === tenantId) indexNumber = i;
        }
        // Set the currently selected tenant's index, changes state variable
        setCurrentlySelectTenantId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path)
        // Navigate to the tenant's details page using the indexNumber
        navigate(path);
    };

    console.log('tenantList', tenantList);

    /*
     Filters the list of tenants based on a search phrase.

     */
    const renderedList = tenantList.filter((tenant) => {
        // Check if the tenant description contains the search phrase (case-insensitive)
        if (
            tenant.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
            //when main page loads, searchPhrase ==='' so it renders all tenant
            searchPhrase === ''
        ) {
            // If the description includes the search phrase or the search phrase is empty, include the tenant in the filtered list
            return true;
        }
        // Otherwise, exclude the tenant from the filtered list
        return false;
    });

    console.log('renderedList', renderedList);

    //NewTenant changed to EditTenant
    //navigate props from EditTenant.js = navigate
    const onEditTenant = (navigate) => {
        loadTenants();
        navigate("/");
    }

    /*
        BrowserRouter enables client-side routing. Define Routes based on <SearchTenant handlers/>
        updateSearchResults, renderedList, updateSingleTenant trigger rerenders with user interactions
        <Route /new defines a route for newTenant
        <Route /show/:tenantId defines a route for <OneTenant with the selected tenantId as the selected tenant
    */
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path='/' element={<SearchTenant updateSearchResults={updateSearchResults} tenantList={renderedList} updateSingleTenant={updateSingleTenant}/>}/>
            <Route exact path='/new' element={<EditTenant onEditTenant={onEditTenant}/>} />
            <Route exact path='/edit/:tenantId' element={<EditTenant onEditTenant={onEditTenant} tenant={tenantList[currentlySelectedTenantId]}/>} />
            <Route exact path='/show/:tenantId' element={<OneTenant tenant={tenantList[currentlySelectedTenantId]} />}/>
        </Routes>
        </BrowserRouter>
    );

};

export default App;