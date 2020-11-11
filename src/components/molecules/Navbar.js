import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from "../atoms/Button.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import LogIn from "../pages/LogIn.js";
import SignUp from "../pages/SignUp.js";
import MyDecks from "../pages/MyDecks.js";
import "../Style-sheets/navbar.css"


class Navbar extends Component {

    state = {
        logedIn: true,
    }
    signOut = () => {
      this.setState(state => {return (state.logedIn = false)});
    }
    render(){  
      console.log(this.logedIn);
  
        if (this.logedIn === true){ return(
    <div>
        <Router>
          <div>
            <nav className="Navbar">
              <div className="link">
              <Link to="/home">Home</Link>
              </div>
              <div className="link">
              <Link to="/about">About</Link>
              </div>
              <div className="link">
                <Link to="/decks">My decks</Link>
              </div >
              <div className="link">                
              <Button name="Log out" onClick={this.signOut}/>
              </div>
            </nav>

            <Switch>
              <Route exact path="/home">
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
    </div>
        
        );}else{return (
  
   <div className="Navbar1">     
        <Router>
          <div>
            <nav className="Navbar">
              <div>
              <Link to="/home">Home</Link>
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
          <Route exact path="/home">
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
        );}

  }
}

export default Navbar;
