import React, { Component,useState } from 'react'
import {connect} from 'react-redux'
import {addRoom, result} from '../../store/actions/mqttActions'
import * as actionType from '../../store/actionType'
import {Redirect} from 'react-router-dom'
import Loading from '../layout/Loading'
import M from 'materialize-css';


class AddRoom extends Component {
    state={
        type:actionType.ADD_ROOM,
        name:'',
        floor:'',
        room:'',
        capacity:'',
        sensorid:''
    }

    handleChange=(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmite=(e)=>{
        e.preventDefault();
        if(this.state&&this.state.name&&this.state.room&&this.state.floor&&this.state.sensorid&&this.state.capacity){
            this.props.createRoom(this.state)
            e.target.reset();
        }
    }

    render() {
        if(!this.props.loginData || this.props.loginData.message !== "success"){
            return (
            <Redirect to="/signin" />
            )
        }
        const {result} = this.props
        const {command} = this.props
        if(result && result==="done"){
            M.toast({html: 'Room added'})
        }else if(result && result==="fail"){
            M.toast({html: 'An error Occure'})
        }
        console.log("command",command)
        return (
            <div className='form-addroom container'>
                <form onSubmit={this.handleSubmite} className="white z-depth-2">
                    <h5 className="grey-text grey-darken4">Add Room</h5>
                    <div className="input-field">
                        <label htmlFor="name"> Name </label>
                        <input type="text" id='name' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="floor"> Floor </label>
                        <input type="number" id='floor' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="room"> Room </label>
                        <input type="number" id='room' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="capacity"> Capacity </label>
                        <input type="number" id='capacity' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="sensorid"> Sensor Id </label>
                        <input type="text" id='sensorid' onChange={this.handleChange}/>
                    </div>

                    <div className="row">
                        <div className=" col input-field">
                            <button className="btn orange accent-4 z-depth-1">
                                Add
                            </button>            
                        </div>
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
            createRoom : (room) => dispatch(addRoom(room)) 
        }
    )
}
// state mapper
const mapStateToProps = (state) =>{
    return(
        {
            result:state.result.result,
            loginData:state.auth.login,
            command:state.command
            
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddRoom)
