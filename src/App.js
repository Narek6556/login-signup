import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UsersPage from './pages/UsersPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';


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
                <Route path="/home-page">
                  <HomePage />
                </Route>
                <Route path="/profile-page">
                  <ProfilePage />
                </Route>
              </Switch>
            </>
        </Router>
      );
    }
}

export default App;
