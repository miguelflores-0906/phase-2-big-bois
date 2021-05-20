
import './index.css';
import Navbar from './components/Navbar'
import Post from './components/Post'
import Profile from "./components/Profile"
import Board from "./components/Board"
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Boardpost from './components/Boardpost'
import Postpage from './components/Postpage'
import Login from './components/Login'
import Newpost from './components/Newpost'

function App() {
  return (
    <Router>
      <div>
        {/* <Postpage /> */}
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/newpost" exact component ={Newpost}/>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/board/" exact component={Board} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
