import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import store from '../../store/store'
import {login} from '../../store/actions/authAction'
import {connect} from 'react-redux'

class SignedIn extends Component {
    state={
        email:'',
        password:''
    }

    handleChange=(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmite=(e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.login(this.state)
    }

    render() {
        if(this.props.loginData && this.props.loginData.message === "success"){
            return (
            <Redirect to="/" />
            )
        }
        return (
            <div className='form-login container'>
                <form onSubmit={this.handleSubmite} className="white z-depth-2">
                    <h5 className="grey-text grey-darken4">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id='email' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"> password </label>
                        <input type="password" id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn orange accent-4 z-depth-1">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch) =>{
    return({
        login : (state) => dispatch(login(state))
    })
}

const mapStateToProps = (state) =>{
    return({
        loginData:state.auth.login
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedIn)