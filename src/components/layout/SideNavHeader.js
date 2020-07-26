import React from 'react'
import {connect} from 'react-redux'

const SideNavHeader = (props) => {
    return(
        <div className="sidenav-header">
                <div className="sidenav-header-lable">
                    <div className="circle-orange"></div>
                    <h6 >{props.loginData.result.name}</h6>
                    <h6 >{props.loginData.result.email}</h6>
                </div>
            </div>
    )
}

const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}


export default connect(mapStateToProps)(SideNavHeader)