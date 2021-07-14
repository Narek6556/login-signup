import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import UsersPage from './UsersPage';


class App extends Component {
    render() {
      return (
        <Router>
            <>
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
                <Route path="/users-page">
                  <UsersPage />
                </Route>
              </Switch>
            </>
        </Router>
      );
    }
}

export default App;
