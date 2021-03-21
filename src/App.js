import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home/Home';
import Error404 from './Components/Error404/Error404';
import Header from './Components/Header/Header';
import Distination from './Components/Distination/Distination';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [signedInUser, setSignInUser] = useState({})
  return (
    <UserContext.Provider value={[signedInUser, setSignInUser]}>
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/distination">
          <Distination />
        </PrivateRoute>
        <PrivateRoute path="/blogs">
          <Blogs />
        </PrivateRoute>
        <Route path="/contact">
          <Contact /> 
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
