import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import RoomDetail from './components/room/RoomDetail'
import SignedIn from '../src/components/auth/SignedIn'
import Signedup from '../src/components/auth/Signedup'
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

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
