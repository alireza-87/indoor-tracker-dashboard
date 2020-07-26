import React, { Component } from 'react'
import {connect} from 'react-redux'
import ActivityMonitoringList from './ActivityMonitoringList'

export class ActivityMonitoring extends Component {
    render() {
        const { activityLog }=this.props

        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <ActivityMonitoringList  activitylog={activityLog}/>
                    </div>
                </div>

            </div>
        )
    }
}

// state mapper
const mapStateToProps = (state) =>{
    return(
        {
            activityLog:state.activity.activityLog,
        }
    )
}

export default connect(mapStateToProps)(ActivityMonitoring)