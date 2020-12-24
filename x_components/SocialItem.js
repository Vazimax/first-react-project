import React from 'react'
import Social from './Social'

function SocialItem(props){

    return(
        <li className="list-group-item">
            <img src={props.image} alt={`'icon of' ${props.media}`} />
            <input type="checkbox" id={props.id}/>
            <label htmlFor={props.id}>{props.media}</label>
        </li>
    )   
}

export default SocialItem