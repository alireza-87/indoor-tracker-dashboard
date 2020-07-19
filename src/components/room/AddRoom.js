import React, { Component } from 'react'
import {createRoom} from '../../store/actions/roomActions'
import {connect} from 'react-redux'
import {addRoom} from '../../store/actions/mqttActions'

class AddRoom extends Component {
    state={
        type:'addRoom',
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
        this.props.createRoom(this.state)
    }

    render() {
        const { result }=this.props
        return (
            <div className='container'>
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
            result:state.mqtt.result
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddRoom)
