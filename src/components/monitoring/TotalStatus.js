import React from 'react'

const TotalStatus = ({totalCount,totalCurrentOccupide}) =>{
    return(
        <div className="card z-depth-2 server-summery">
        <div className="card-content grey-text text-darker-3">
                <span className="card-title">
                    totalCount: {totalCount}
                </span>
                <span className="card-title">
                    totalOccupide: {totalCurrentOccupide}
                </span>
        </div>
        </div>
    )
}

export default TotalStatus