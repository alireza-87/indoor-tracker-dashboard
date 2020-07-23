import React from 'react'
import { NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const SignedInLink = (props) => {
    const level= (props.loginData && props.loginData.message === "success" && props.loginData.result.rule === 'admin')?1:0
    return(
        <ul className="right">
            { level === 1 ? <li><NavLink to='/addroom'>Add Room</NavLink></li>:null}
            { level === 1 ? <li><NavLink to='/addperson'>Add User</NavLink></li>:null}
            { level === 1 ? <li><NavLink to='/person'>User List</NavLink></li>:null}
            <li>
                <NavLink to='/'>Logout</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating orange accent-4'>NN</NavLink>
            </li>
 
        </ul>
    )

}

const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}

export default connect(mapStateToProps)(SignedInLink)