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
    return(
        {
            rooms:state.room.room
        }
    )
}

export default connect(mapStateToProps)(Dashboard)