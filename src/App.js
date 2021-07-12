import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';


class App extends Component {
    render() {
      return (
        <Router>
            <div className="app">
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
              </Switch>
            </div>
        </Router>
      );
    }
}

export default App;
