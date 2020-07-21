import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../../store/actions/mqttActions'

class AddPerson extends Component {
    state={
        type:'addPerson',
        name:'',
        surename:'',
        rule:'',
        tell:'',
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
        if(this.state&&this.state.name&&this.state.surename&&this.state.tell&&this.state.rule&&this.state.email&&this.state.password)
            this.props.addPerson(this.state)
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmite} className="white z-depth-2">
                    <h5 className="grey-text grey-darken4">Add Person</h5>
                    <div className="input-field">
                        <label htmlFor="name"> Name </label>
                        <input type="text" id='name' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="surename"> sure name </label>
                        <input type="text" id='surename' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="rule"> Rule </label>
                        <input type="text" id='rule' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="tell"> Tell </label>
                        <input type="number" id='tell' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>
                        <input type="email" id='email' onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password"> Password </label>
                        <input type="text" id='password' onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <button className="btn orange accent-4 z-depth-1">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
//dispatcher mapper
const mapDispatchToProps=(dispatch) =>{
    return(
        {
            addPerson : (person) => dispatch(addPerson(person)) 
        }
    )
}
// state mapper
const mapStateToProps = (state) =>{
    return(
        {
            result:state.room.result
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPerson)
