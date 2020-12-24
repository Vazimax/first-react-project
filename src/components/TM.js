import React from 'react'

function TM(props){
    return(
        <div className="col-md-4 border">
            <div className="card-header">
                <img style={{maxWidth:'100%'}} src={props.info.image} ></img>
            </div>
            <div className="card-body" style={{backgroundColor: props.info.website ? 'white' : 'black'}}>
                <h3>{props.info.name}</h3>
                <p>{props.info.position}</p>
                <p>{props.info.email}</p>
                <p>{props.info.phone}</p>
                <p>{props.info.website}</p>
            </div>
        </div>
    )   
}

export default TM