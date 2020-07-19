import React,{ Component } from 'react'
import RoomList from '../room/RoomList'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        const { rooms }=this.props
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col">
                        <RoomList rooms={rooms}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log("STATE ::: ",state.mqtt.rooms)
    return(
        {
            rooms:state.mqtt.rooms
        }
    )
}

export default connect(mapStateToProps)(Dashboard)