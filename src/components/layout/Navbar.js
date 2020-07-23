import React from 'react'
import { Link } from 'react-router-dom'
import  SignedInLink from './SignedInLink'
import  SignedOutLink from './SignedOutLink'
import {connect} from 'react-redux'

const Navbar =(props) => {
    const link = (props.loginData && props.loginData.message === "success") ?<SignedInLink /> :<SignedOutLink />
    return(
        <nav className="nav-wrapper blue-grey darken-4 z-depth-2">
            <div className="container">
                <Link to='/' className='brand-logo'>Indoor Tracker</Link>
                {link}
            </div>
        </nav>
    )
}


const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}

export default connect(mapStateToProps)(Navbar)