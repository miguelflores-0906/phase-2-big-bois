import {Link} from 'react-router-dom'

// graphics
import General from '../graphics/general.png'
import Esports from '../graphics/esports.png'
import News from '../graphics/news.png'
import Social from '../graphics/social.png'
import Tabletop from '../graphics/tabletop.png'
import Retro from '../graphics/retro.png'
import Tech from '../graphics/tech.png'
import Rigs from '../graphics/rigs.png'
import Support from '../graphics/support.png'

const Boardlist = () => {

    const linkStyles = {
        color: 'black',
        textDecoration: 'none',
        fontSize: '20px',
    }

    const test_method = () => {
        console.log('yeeting to a diff board');
    }

    return (
        <div>
            <div className="grid-container">
                <Link style={linkStyles} to="/boards/general">
                    <div onClick={() => test_method()}>
                        <img src={General} className="img" alt="general"></img>
                        <h3>GENERAL</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/esports">
                    <div>
                        <img src={Esports} className="square-img" alt="esports"></img>
                        <h3>E-SPORTS</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/news">
                    <div>
                        <img src={News} className="img" alt="news"></img>
                        <h3>NEWS</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/social">
                    <div>
                        <img src={Social} className="img" alt="social"></img>
                        <h3>SOCIAL</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/retro">
                    <div>
                        <img src={Retro} className="img" alt="retro"></img>
                        <h3>RETRO</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/tabletop">
                    <div>
                        <img src={Tabletop} className="square-img" alt="tabletop"></img>
                        <h3>TABLETOP</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/tech">
                    <div>
                        <img src={Tech} className="img" alt="tech"></img>
                        <h3>TECH</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/rigs">
                    <div>
                        <img src={Rigs} className="square-img" alt='rigs'></img>
                        <h3>RIGS</h3>
                    </div>
                </Link>

                
                <Link style={linkStyles} to="/boards/support">
                    <div>
                        <img src={Support} className="square-img" alt='support'></img>
                        <h3>SUPPORT</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Boardlist
