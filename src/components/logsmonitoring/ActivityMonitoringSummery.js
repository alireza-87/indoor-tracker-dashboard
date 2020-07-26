import React, { Component } from 'react'

export class ActivityMonitoringSummery extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {activitylog}=this.props
        return (
            <div >
                <p > {activitylog.user.name} {activitylog.action === "entertoroom"?" Enter to ":" Exit from "}floor {activitylog.floor} room {activitylog.room}</p>
               
            </div>
        )
    }
}

export default ActivityMonitoringSummery
