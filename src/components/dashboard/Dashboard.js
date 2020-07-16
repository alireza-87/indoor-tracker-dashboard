import React,{ Component } from 'react'
import RoomList from '../room/RoomList'
class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6 l4">
                        <RoomList/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard