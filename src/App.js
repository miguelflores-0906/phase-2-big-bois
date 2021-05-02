
import './index.css';
import Navbar from './components/Navbar'
import Post from './components/Post'
import Profile from "./components/Profile"
import Board from "./components/Board"
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/board" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
