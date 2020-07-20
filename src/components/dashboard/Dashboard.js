import React,{ Component,useEffect } from 'react'
import RoomList from '../room/RoomList'
import {connect} from 'react-redux'
import {getRoomList} from '../../store/actions/mqttActions'

class Dashboard extends Component{
    state={
        type:'getRoomList'
        }
    componentDidMount() {
        this.props.getRoomList(this.state)
    }
        
    render(){    
        const { rooms }=this.props
        console.log("DASHBOARD")
        {rooms && rooms.map(item => {console.log(item)})}
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
//dispatcher mapper
const mapDispatchToProps=(dispatch) =>{
    return({
        getRoomList : (room) => dispatch(getRoomList(room)) 
    })
}

const mapStateToProps = (state) =>{
    return({
        rooms:state.room
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)