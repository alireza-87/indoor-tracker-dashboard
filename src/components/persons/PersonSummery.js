import React from 'react'
import { NavLink } from 'react-router-dom'

const personSummery = ({person}) => {
    console.log("PPPPP > ",person)
    return(
        <div className="card-person col s12 m6 l4">
        <div className="card z-depth-2 room-summery">

            <div className="row card-content">
                <div className="col circle-orange"><i class="material-icons img-circle">perm_identity</i></div>
                <div className="col "><h5 className="state-data">{person.user?person.user.name:person.name}</h5></div>
            </div>

            <div className="card-content grey-text text-darker-3">
                <h6 className="card-person-content">Email: {person.user?person.user.email:person.email}</h6>
                <h6>Rule: {person.user?person.user.rule:person.rule}</h6>
                <h6>Tell: {person.user?person.user.tell:person.tell}</h6>
            </div>
            <div className="div-seprator"></div>
            <div className="card-action">
                <NavLink to={`/persondetail/${person.email}`}>Detail...</NavLink>
            </div>
        </div>
        </div>
    )
}

export default personSummery