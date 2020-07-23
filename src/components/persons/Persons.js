import React, { Component } from 'react'
import {connect} from 'react-redux'
import PersonList from './PersonList'
import {getAllUser,getUserOfRoom} from '../../store/actions/mqttActions'
import {Redirect} from 'react-router-dom'

class Persons extends Component {
    
    componentDidMount(){
        if(this.props.loginData || this.props.loginData.message === "success")
       {
           if(!this.props.match.params.floor)
                this.props.users()
            else
                this.props.getUserOfRoom(this.props.match.params.floor,this.props.match.params.room)
        }
    }

    render() {
        if(!this.props.loginData || this.props.loginData.message !== "success"){
            return (
            <Redirect to="/signin" />
            )
        }

        const { persons }=this.props
        
        return (
            <div className='persons container'>
                <div className="row">
                    <div className="col">
                        <PersonList persons={persons}/>
                    </div>
                </div>

            </div>
        )
    }
}
//dispatcher mapper
const mapDispatchToProps=(dispatch) =>{
    return(
        {
            users : () => dispatch(getAllUser()),
            getUserOfRoom : (floor,room) => dispatch(getUserOfRoom(floor,room)) 
        }
    )
}
// state mapper
const mapStateToProps = (state) =>{
    return(
        {
            persons:state.users.allUser,
            loginData:state.auth.login

        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons)
