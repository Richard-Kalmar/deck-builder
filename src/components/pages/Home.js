import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Button from "../atoms/Button.js";
import Gwent from './Gwent.js';
import Heartstone from './Heartstone.js';
import Magic from './Magic.js';
function Home() {
    let match = useRouteMatch();
    return (

    <div>
        
            <div className="gametypeContainer">
                <div className="gametype">
                    <Link to={`${match.url}/magicthegathering`}>Magic The Gathering</Link>
                </div>
                <div className="gametype">
                <Link to={`${match.url}/heartstone`}>Heartstone</Link>
                </div>
                <div className="gametype">
                <Link to={`${match.url}/gwent`}>Gwent</Link>
                </div>
            </div>

            <Switch>
                <Route exact path={`${match.path}/magicthegathering`}>
                    <Magic />
                </Route>
                <Route exact path={`${match.path}/heartstone`}>
                    <Heartstone />
                </Route>
                <Route exact path={`${match.path}/gwent`}>
                    <Gwent />
                </Route>
            </Switch>
        
    </div>
    );
}

export default Home