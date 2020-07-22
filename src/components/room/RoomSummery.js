import React from 'react'
import { NavLink } from 'react-router-dom'
const RoomSummery = ({room}) => {
    return(
        <div className="col s12 m6 l4">
        <div className="card z-depth-2 room-summery">
            <div className="card-content grey-text text-darker-3">
                <span className="card-title">
                    {room.name}
                </span>
                <h6>Floor : {room.floor}</h6>
                <h6>Room :  {room.room}</h6>
                <h6>Current Occupied : {room.counter}</h6>
                <h6>Capacity : {room.capacity}</h6>
                <h6>Is Enable :  {room.isenable}</h6>
                <NavLink to='/person'>Detail...</NavLink>
            </div>
        </div>
        </div>
    )
}

export default RoomSummery