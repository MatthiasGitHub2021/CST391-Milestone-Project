import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataSource from "./dataSource";

const EditTenant = (props) => {

    //Assume New Tenant by setting up an empty tenant and setting the flag newTenantCreation
    let tenant = {
        name: '',
        profession: '',
        description: '',
        phone: '',
        suite: '',
        image: '',
    };

    let newTenantCreation = true;

    //If a tenant is provided in 'props', then we are editing an tenant
    //Set tenant to the provided tenant and set newTenantCreation to false.
    if(props.tenant){
        tenant = props.tenant;
        newTenantCreation = false;
    }

    //tenant is now setup as an edited or new tenant.
    const [ tenantName, setTenantName ] = useState(tenant.name);
    const [ profession, setProfession ] = useState(tenant.profession);
    const [ description, setDescription ] = useState(tenant.description);
    const [ phone, setPhone ] = useState(tenant.phone);
    const [ suite, setSuite ] = useState(tenant.suite);
    const [ image, setImage ] = useState("https://picsum.photos/200/300?random=1");
    const [ serviceOne, setServiceOne ] = useState(tenant.serviceOne);
    const [ serviceTwo, setServiceTwo ] = useState(tenant.serviceTwo);
    const [ serviceThree, setServiceThree ] = useState(tenant.serviceThree);
    const navigate = useNavigate();

    const updateName = (event) => {
        setTenantName(event.target.value);
    };
    const updateProfession = (event) => {
        setProfession(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updatePhone = (event) => {
        setPhone(event.target.value);
    };
    const updateSuite = (event) => {
        setSuite(event.target.value);
    };
    const updateImage = (event) => {
        setImage(event.target.value);
    };
    const updateServiceOne = (event) => {
        setServiceOne(event.target.value);
    };
    const updateServiceTwo = (event) => {
        setServiceTwo(event.target.value);
    };
    const updateServiceThree = (event) => {
        setServiceThree(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedTenant = {
            //tenantId is important for updating an tenant it is ignored on a new tenant
            tenantId: tenant.tenantId,
            name: tenantName,
            profession: profession,
            description: description,
            phone: phone,
            suite: suite,
            image: image,
            serviceOne: serviceOne,
            serviceTwo: serviceTwo,
            serviceThree: serviceThree,
        };
        console.log(editedTenant);

        saveTenant(editedTenant);
    };

    const saveTenant = async (tenant) => {
        let response;
        if(newTenantCreation)
            response = await dataSource.post('/tenants', tenant);
        else
            response = await dataSource.put('/tenants', tenant);
        console.log(response);
        console.log(response.data);
        //onNewTenant = handler in App.js, navigate props passed to <Route exact path='/new' element={<NewTenant onNewTenant={onNewTenant}/>} />
        props.onEditTenant(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>{newTenantCreation ? "Create New" : "Edit"} Tenant</h1>
                <div className="form-group">
                    <label htmlFor="tenantName">Tenant Name</label>
                    <input type="text" className="form-control" id="tenantName" value={tenantName} onChange={updateName}/>
                    <label htmlFor="tenantArtist">Profession</label>
                    <input type="text" className="form-control" id="tenantProfession" value={profession} onChange={updateProfession}/>
                    <label htmlFor="tenantDescription">Description</label>
                    <textarea type="text" className="form-control" id="tenantDescription" value={description} onChange={updateDescription}/>
                    <label htmlFor="tenantYear">Phone</label>
                    <input type="text" className="form-control" id="tenantPhone" value={phone} onChange={updatePhone}/>
                    <label htmlFor="tenantYear">Suite</label>
                    <input type="text" className="form-control" id="tenantSuite" value={suite} onChange={updateSuite}/>
                    <label htmlFor="tenantImage">Image</label>
                    <input type="text" className="form-control" id="tenantImage" value={image} onChange={updateImage}/>
                    <label htmlFor="tenantServiceOne">Service One</label>
                    <input type="text" className="form-control" id="tenantServiceOne" value={serviceOne} onChange={updateServiceOne}/>
                    <label htmlFor="tenantServiceTwo">Service Two</label>
                    <input type="text" className="form-control" id="tenantServiceTwo" value={serviceTwo} onChange={updateServiceTwo}/>
                    <label htmlFor="tenantServiceThree">Service Three</label>
                    <input type="text" className="form-control" id="tenantServiceThree" value={serviceThree} onChange={updateServiceThree}/>
                </div>
                <div align="center">
                    <button type="button" className="btn btn-primary" onClick={handleCancel}>Cancel</button>&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        ); 
};

export default EditTenant;