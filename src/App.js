import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import RoomDetail from './components/room/RoomDetail'
import SignedIn from '../src/components/auth/SignedIn'
import Signedup from '../src/components/auth/Signedup'
import AddRoom from './components/room/AddRoom'
import AddPerson from './components/room/AddPerson'
import Persons from './components/persons/Persons'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Dashboard}/>
          <Route path='/room/:floor/:room' component={RoomDetail}/>
          <Route path='/signin' component={SignedIn}/>
          <Route path='/signup' component={Signedup}/>
          <Route path='/addroom' component={AddRoom}/>
          <Route path='/addperson' component={AddPerson}/>
          <Route path='/person' component={Persons}/>


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
