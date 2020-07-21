import React,{ Component } from 'react'
import RoomList from '../room/RoomList'
import {connect} from 'react-redux'
import {getRoomCount,getRoomList} from '../../store/actions/mqttActions'
let temp=0

class Dashboard extends Component{
    state={
        type:'getRoomList'
        }
    componentDidMount() {
        this.props.getRoomList(this.state)
    }
    render(){    
        const { rooms }=this.props
        console.log("TEMP > ",temp)
        if(temp===0){
            {rooms && rooms.forEach (item => this.props.getRoomCount(item.floor,item.room) )}
            console.log("TEMP > ",rooms.length)
            if(rooms.length>0)
                temp=1
        }
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
        getRoomList : (room) => dispatch(getRoomList(room)),
        getRoomCount : (floor,room) => dispatch(getRoomCount(floor,room)) 
    })
}

const mapStateToProps = (state) =>{
    return({
        rooms:state.room.roomList
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)