import React from 'react'
import { Link } from 'react-router-dom'
import  SignedInLink from './SignedInLink'
import  SignedOutLink from './SignedOutLink'
import {connect} from 'react-redux'
import M from 'materialize-css';
import options from 'materialize-css';

const Navbar =(props) => {
    const link = (props.loginData && props.loginData.message === "success") ?<SignedInLink /> :<SignedOutLink />
    const handleClick=(e)=>{
        e.preventDefault();
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
        instances[0].open()

    }
    return(
        <nav className="nav-wrapper blue-grey darken-4 z-depth-2">
            <div className="container">
                <Link to='/' className='brand-logo'>Indoor Tracker</Link>
                {link}
            </div>

            <a onClick={handleClick} href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </nav>
    )
}


const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}

export default connect(mapStateToProps)(Navbar)