import React from 'react'
import { NavLink} from 'react-router-dom'
const SignedInLink = () => {

    return(
        <ul className="right">
            <li>
                <NavLink to='/addroom'>Add Room</NavLink>
            </li>
            <li>
                <NavLink to='/addperson'>Add Person</NavLink>
            </li>
            <li>
                <NavLink to='/'>Logout</NavLink>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating orange accent-4'>NN</NavLink>
            </li>
 
        </ul>
    )

}

export default SignedInLink