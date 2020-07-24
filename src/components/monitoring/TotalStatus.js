import React from 'react'

const TotalStatus = ({totalCount,totalCurrentOccupide}) =>{
    
    return(
        <div className="card z-depth-2 server-summery">
            <div >
                <div className="card-title">
                    <h6 className="card-title gray-text darken-4">Current Status</h6>
                </div>
                <div className="div-seprator"></div>
                <div className="card-content ">
                    <div className="row s12">
                        <div className="col s6">
                            <div className="row state-label ">
                                <div className="col state-empty-col"></div>
                                <div className="col"><h6 className='grey-text' >Total Attendees</h6></div>
                            </div>

                            <div className="row">
                                <div className="col circle"><i className="material-icons img-circle">face</i></div>
                                <div className="col "><h5 className="state-data">{totalCurrentOccupide}</h5></div>
                            </div>
                        
                        </div>

                        <div className="col s6">
                            <div className="row state-label ">
                                <div className="col state-empty-col"></div>
                                <div className="col"><h6 className='grey-text' >total Capacity</h6></div>
                            </div>

                            <div className="row">
                                <div className="col circle-pink"><i className="material-icons img-circle">people_outline</i></div>
                                <div className="col "><h5 className="state-data">{totalCount}</h5></div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div className="div-seprator"></div>

            </div>
        </div>
    )
}

export default TotalStatus