import React, { Component } from 'react'
import {connect} from 'react-redux'
import PersonList from './PersonList'
import {getAllUser} from '../../store/actions/mqttActions'

class Persons extends Component {
    
    componentDidMount(){
        this.props.users()
    }

    render() {
        const { persons }=this.props
        console.log("TEMP > ",persons)
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
            users : () => dispatch(getAllUser()) 
        }
    )
}
// state mapper
const mapStateToProps = (state) =>{
    return(
        {
            persons:state.users.allUser
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons)
