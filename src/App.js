
import './index.css';
import Navbar from './components/Navbar'
import Post from './components/Post'
import Profile from "./components/Profile"
import Board from "./components/Board"
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Boardpost from './components/Boardpost'
import Postpage from './components/Postpage'
import Newpost from './components/Newpost'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        
        {/* <Postpage /> */}
        <Switch>
          <Route path="/newpost" exact component ={Newpost}/>
=======
        <Navbar />
        {/* <Postpage /> */}
        <Switch>
          <Route path="/" exact component ={Newpost}/>
>>>>>>> parent of 822a359 (Merge branch 'master' into DyDB)
=======
        <Navbar />
        {/* <Postpage /> */}
        <Switch>
          <Route path="/" exact component ={Newpost}/>
>>>>>>> parent of 822a359 (Merge branch 'master' into DyDB)
=======
        <Navbar />
        {/* <Postpage /> */}
        <Switch>
          <Route path="/" exact component ={Newpost}/>
>>>>>>> parent of 822a359 (Merge branch 'master' into DyDB)
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/board/" exact component={Board} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/navbar" exact component = {Navbar} />
          <Route path="/login" exact component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;