const initState={
    room:[
        {id:'1',name:'Lab',floor:'1',room:'107',capacity:'12',occupied:'3',isenable:'1',sensorid:'1111222-333444'},
        {id:'2',name:'206',floor:'2',room:'206',capacity:'20',occupied:'4',isenable:'1',sensorid:'1111333-333444'},
        {id:'3',name:'317',floor:'3',room:'317',capacity:'20',occupied:'5',isenable:'1',sensorid:'1111444-333444'},
        {id:'4',name:'Deposite',floor:'4',room:'409',capacity:'2',occupied:'3',isenable:'1',sensorid:'1111555-333444'}
    ]
}
const roomReducer = (state = initState , action) =>{
    switch(action.type){
        case 'CREATE_ROOM':
            console.log('create room : ',action.room)
            break
        default :
            console.log('%%%%')
            break

    }
    return state
}

export default roomReducer