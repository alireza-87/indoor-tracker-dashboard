import React from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../../store/actions/authAction'

const SignedInLink = (props) => {
    const level= (props.loginData && props.loginData.message === "success" && props.loginData.result.rule === 'admin')?1:0
    return(
        <ul className="right">
            { level === 1 ? <li><NavLink to='/addroom'>Add Room</NavLink></li>:null}
            { level === 1 ? <li><NavLink to='/addperson'>Add User</NavLink></li>:null}
            { level === 1 ? <li><NavLink to='/person'>User List</NavLink></li>:null}
            <li>
                <a onClick={props.logOut}>Logout</a>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating orange accent-4'>NN</NavLink>
            </li>
 
        </ul>
    )

}

const mapDispatchToProps = (dispatch) =>{
    return({
        logOut :  () => dispatch(logOut()) 
    })
}

const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLink)