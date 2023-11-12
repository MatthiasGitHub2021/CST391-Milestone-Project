import React from "react";

/*
    Child component to TenantList.
    Tenant cards on main page. Displays image, title, description + button.
    Button passes tenantId to props. TenantList handler const handleSelectionOne = (tenantId) => {
    
 */
const Card = (props) => {
    const onButtonClick = (event, uri) => {
        console.log('tenantId is ' + props.tenantId);
        props.onClick(props.tenantId, uri);
    }

    const onDelete = (event, uri) => {
        console.log('Deleting tenantId: '+ props.tenantId);
        props.onDelete(props.tenantId, uri);
    }
    //const navigate = useNavigate();

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.imgURL} alt="title" className="card-img-top"/>
            <div className="card-body">
                <h5>{props.tenantName}</h5>
                <p>{props.tenantProfession}</p>
                <p>{props.tenantDescription}</p>
                <p>{props.tenantPhone}</p>
                <p>{props.tenantImage}</p>
                <p>Suite: {props.tenantSuite}</p>
                <p>{props.tenantServiceOne}</p>
                <p>{props.tenantServiceTwo}</p>
                <p>{props.tenantServiceThree}</p>
                <button className='btn btn-primary' onClick={() => onButtonClick(props.tenantId, '/show/')}> Read </button>&nbsp;
                <button className='btn btn-primary' onClick={() => onButtonClick(props.tenantId, '/edit/')}> Update</button>&nbsp;
                <button className='btn btn-danger' onClick={() => onDelete(props.tenantId, '/delete/')}>Delete</button>

            </div>
        </div>

        );
}
export default Card;