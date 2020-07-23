import React from 'react'
import { NavLink} from 'react-router-dom'

const SignedOutLink = () => {
    return(
        <ul className="right">
            <li>
                <NavLink to='/signin'>SignIn</NavLink>
            </li>
        </ul>
    )
}

export default SignedOutLink