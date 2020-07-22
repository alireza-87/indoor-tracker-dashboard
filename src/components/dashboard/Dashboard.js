import React,{ Component } from 'react'
import RoomList from '../room/RoomList'
import TotalStatus from '../monitoring/TotalStatus'
import ServerDiagram from '../monitoring/ServerDiagram'

import {connect} from 'react-redux'
import {getRoomCount,getRoomList} from '../../store/actions/mqttActions'
let temp=0

class Dashboard extends Component{
        
    componentDidMount() {
        this.props.getRoomList()
    }

    render(){    
        const { rooms }=this.props
        console.log("TEMP > ",temp)
        if(temp===0){
            {rooms.roomList && rooms.roomList.forEach (item => this.props.getRoomCount(item.floor,item.room) )}
            console.log("TEMP > ",rooms.length)
            if(rooms.roomList.length>0)
                temp=1
        }
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12">
                        <TotalStatus totalCount={rooms.totalCount} totalCurrentOccupide={rooms.totalCurrentOccupide[4]}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <ServerDiagram totalCount={rooms.totalCount} totalCurrentOccupide={rooms.totalCurrentOccupide}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <RoomList rooms={rooms.roomList}/>
                    </div>
                </div>
            </div>
        )
    }
}
//dispatcher mapper
const mapDispatchToProps=(dispatch) =>{
    return({
        getRoomList : () => dispatch(getRoomList()),
        getRoomCount : (floor,room) => dispatch(getRoomCount(floor,room)) 
    })
}

const mapStateToProps = (state) =>{
    return({
        rooms:state.room
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)