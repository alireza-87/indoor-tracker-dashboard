import React from 'react'

const RoomSummery = () => {
    return(
        <div className="card z-depth-0 room-summery">
            <div className="card-content grey-text text-darker-3">
                <span className="card-title">
                    Room Name
                </span>
                <p>Floor</p>
                <p>Room</p>
                <p>Current Occupied</p>
                <p>Capacity</p>
                <p>Is Enable</p>
            </div>
        </div>
    )
}

export default RoomSummery