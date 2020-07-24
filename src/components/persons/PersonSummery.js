import React from 'react'
import { NavLink } from 'react-router-dom'

const personSummery = ({person}) => {
    console.log("PPPPP > ",person)
    return(
        <div className="card-person col s12 m6 l4">
        <div className="card z-depth-2 room-summery">

            <div className="row card-content">
                <div className="col circle"><i class="material-icons img-circle">perm_identity</i></div>
                <div className="col "><h5 className="state-data">{person.name}</h5></div>
            </div>

            <div className="card-content grey-text text-darker-3">
                <h6 className="card-person-content">Email: {person.email}</h6>
                <h6>Rule: {person.rule}</h6>
                <h6>Tell: {person.tell?person.tell:"No Tell"}</h6>
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