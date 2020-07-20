import React from 'react'
import RoomSummery from './RoomSummery'

const RoomList = ({rooms}) => {
    return(
        <div className="room-List section">
            {
                rooms && rooms.map(room => {
                    return(<RoomSummery room={room} key={room._id} />)
                })
            }
        </div>
    )
}

export default RoomList