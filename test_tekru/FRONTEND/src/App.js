import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from './components/Authentification/login';
import Register from './components/Authentification/register';
import Users from './components/ListUsers/users';
import tableDetails from './components/ListUsers/table';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
        {/* <Route exact path="/table" component={tableDetails} /> */}
      </Switch>
    </div>
  );
}

export default App;
