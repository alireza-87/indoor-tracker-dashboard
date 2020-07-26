import React,{Component} from 'react'
import { NavLink} from 'react-router-dom'
import SideNavHeader from './SideNavHeader'
import {connect} from 'react-redux'

class SignedOutLink extends Component {
    constructor(props){
        super(props)
        this.state = { screenWidth: null };
      
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    
    resize() {
        this.setState({hideNav: window.innerWidth <= 990});
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render(){
        const cssClassName=this.state.hideNav?"sidenav":"right"

        return(
            <ul  id="slide-out" className={cssClassName}>
                <li>
                    <NavLink to='/signin'>{this.state.hideNav?<i class="material-icons">person_add</i>:null}SignIn</NavLink>
                </li>
            </ul>
        )
    
    }
}

const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}

export default connect(mapStateToProps)(SignedOutLink)