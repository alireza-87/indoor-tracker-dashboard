import React from 'react'

const personSummery = ({person}) => {
    console.log("PPPPP > ",person)
    return(
        <div className="col s12 m6 l4">
        <div className="card z-depth-2 person-summery">
            <div className="card-content grey-text text-darker-3">
                <span className="card-title">
                    {person.name}
                </span>
            </div>
        </div>
        </div>
    )
}

export default personSummery