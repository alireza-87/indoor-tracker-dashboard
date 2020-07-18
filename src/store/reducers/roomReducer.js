const initState={
    rooms:[
        {id:'1',name:'Lab',floor:'1',room:'107',capacity:'12',sensorid:'1111222-333444'},
        {id:'2',name:'206',floor:'2',room:'206',capacity:'20',sensorid:'1111333-333444'},
        {id:'3',name:'317',floor:'3',room:'317',capacity:'20',sensorid:'1111444-333444'},
        {id:'4',name:'Deposite',floor:'4',room:'409',capacity:'2',sensorid:'1111555-333444'}
    ]
}
const roomReducer = (state = initState , action) =>{
    return state
}

export default roomReducer