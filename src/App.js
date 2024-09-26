import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axiosWithAuth from "./helpers/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App(props) {
  const handleLogout = (e) => {
    axiosWithAuth()
      .post('http://localhost:5000/api/logout')
      .then(resp => {
        console.log(resp)
        localStorage.removeItem('token');
      })
      .catch(err => {
        console.error(err)
      })
  }
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogout} data-testid="logoutButton" href="/login">logout</a>
        </header>
        <Switch>
          <PrivateRoute path='/bubbles' component={BubblePage}/>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.