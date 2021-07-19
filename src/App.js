import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UsersPage from './pages/UsersPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';


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
                <PrivateRoute component = {UsersPage} path="/users-page" />
                <PrivateRoute component = {HomePage} path="/home-page" />
                <PrivateRoute component = {ProfilePage} path="/profile-page" />
              </Switch>
            </>
        </Router>
      );
    }
}

export default App;
