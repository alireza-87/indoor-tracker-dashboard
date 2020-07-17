import React from 'react'

const RoomDetail = (props) => {
    const floor=props.match.params.floor
    const room=props.match.params.room

    return (
        <div className="container section room-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Room Name
                    </span>
                    <p>Floor : {floor}</p>
                    <p>Room : {room}</p>
                    <p>Capacity</p>
                    <p>Current Situation</p>
                    <p>Sensor Id</p>
                    <p>IsEnable</p>
                </div>
            </div>
        </div>
    )
}

export default RoomDetail
