import React, { Component } from 'react'

class AddRoom extends Component {
    state={
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
        console.log(this.state)
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmite} className="white">
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
                        <input type="text" id='capacity' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="sensorid"> Sensor Id </label>
                        <input type="number" id='sensorid' onChange={this.handleChange}/>
                    </div>


                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddRoom
