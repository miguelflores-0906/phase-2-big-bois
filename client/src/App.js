
import './index.css';
import Profile from "./components/Profile"
// import Board from "./components/Board"
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Boardpost from './components/Boardpost'
import Postpage from './components/Postpage'
import Login from './components/Login'
import Newpost from './components/Newpost'
import GeneralBoard from './components/GeneralBoard'
import EsportsBoard from './components/EsportsBoard'
import NewsBoard from './components/NewsBoard'
import SocialBoard from './components/SocialBoard'
import RetroBoard from './components/RetroBoard'
import TabletopBoard from './components/TabletopBoard'
import TechBoard from './components/TechBoard'
import RigsBoard from './components/RigsBoard'
import SupportBoard from './components/SupportBoard'

function App() {
  return (
    <Router>
      <div>
        {/* <Postpage /> */}
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/newpost" exact component ={Newpost}/>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/boards" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/boardpost" exact component={Boardpost} />
          <Route path="/postpage" exact component={Postpage} />
          <Route path="/boards/general" exact component={GeneralBoard} />
          <Route path="/boards/esports" exact component={EsportsBoard} />
          <Route path="/boards/news" exact component={NewsBoard} />
          <Route path="/boards/social" exact component={SocialBoard} />
          <Route path="/boards/retro" exact component={RetroBoard} />
          <Route path="/boards/tabletop" exact component={TabletopBoard} />
          <Route path="/boards/tech" exact component={TechBoard} />
          <Route path="/boards/rigs" exact component={RigsBoard} />
          <Route path="/boards/support" exact component={SupportBoard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
