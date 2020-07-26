import React, { Component } from 'react'

export class ActivityMonitoringSummery extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {activitylog}=this.props
        if(activitylog.user){
            return (
                <div >
                    <p > {activitylog.user.name} {activitylog.action === "entertoroom"?" Enter to ":" Exit from "}floor {activitylog.floor} room {activitylog.room}</p>               
                </div>
            )
        }else{
            return (
                <div >
                    <p > {activitylog.type === "roomoverload"?" Room over :  ":""} floor : {activitylog.floor} room: {activitylog.room}</p>               
                </div>
            )
        }
    }
}

export default ActivityMonitoringSummery
