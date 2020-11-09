import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from "src/components/atoms/Button.js";
import Home from "src/components/pages/Home.js";
import About from "src/components/pages/About.js";
import LogIn from "src/components/pages/LogIn.js";
import SignUp from "src/components/pages/SignUp.js";
import MyDecks from "src/components/pages/MyDecks.js";


class Navbar extends Component {

    state = {
        logedIn: false,
    }

    signOut = () => {
        this.setState(state => {return (state.logedIn = false)});
    }
  render(){  
  return (
    <div className="Navbar">
        logedIn ? 
        <Router>
          <div>
            <nav>
              <div>
              <Link to="/">Home</Link>
              </div>
              <div>
              <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/decks">My decks</Link>
              </div>
              <Button name="Log out"/>
            </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/decks">
            <MyDecks />
          </Route>
        </Switch>
          </div>
        </Router>
        
        :

        <Router>
          <div>
            <nav>
              <div>
              <Link to="/">Home</Link>
              </div>
              <div>
              <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/signup">Sign Up</Link>
              </div>
              <div>
                <Link to="/login">Log In</Link>
              </div>
            </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
          </div>
        </Router>

    </div>
  );
  }
}

export default Navbar;
