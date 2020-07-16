import React from 'react'
import { NavLink} from 'react-router-dom'

const SignedOutLink = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to='/'>SignIn</NavLink>
            </li>
            <li>
                <NavLink to='/'>SignUp</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLink