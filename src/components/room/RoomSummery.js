import React from 'react'

const RoomSummery = () => {
    return(
        <div className="card z-depth-2 room-summery">
            <div className="card-content grey-text text-darker-3">
                <span className="card-title">
                    Room Name
                </span>
                <h6>Floor</h6>
                <h6>Room</h6>
                <h6>Current Occupied</h6>
                <h6>Capacity</h6>
                <h6>Is Enable</h6>
            </div>
        </div>
    )
}

export default RoomSummery