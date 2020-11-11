
import './App.css';
import Navbar from './components/molecules/Navbar';
import {Redirect, Switch} from 'react-router-dom'
import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Redirect exact from="/" to="/home" />
      <Home />
      </Switch>


    </div>
  );
}

export default App;
