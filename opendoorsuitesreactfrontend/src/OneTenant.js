import React from "react";

const OneTenant = (props) =>{
    
    return (
        <div className='container'>
            <h2>Tenant Details for {props.tenant.name}</h2> 
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card' style={{width: '12rem'}}>
                        <img
                            src={props.tenant.image}
                            className='card-img-top'
                            alt={props.tenant.name}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{props.tenant.name}</h5>
                            <p className="card-text">{props.tenant.description}</p>
                            <p className="card-text">{props.tenant.phone}</p>
                            <p className="card-text">Suite: {props.tenant.suite}</p>
                            <li className="card-text">{props.tenant.serviceOne}</li>
                            <li className="card-text">{props.tenant.serviceTwo}</li>
                            <li className="card-text">{props.tenant.serviceThree}</li>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default OneTenant;