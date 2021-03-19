import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home/Home';
import Error404 from './Components/Error404/Error404';
import Header from './Components/Header/Header';
import Distination from './Components/Distination/Distination';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';

function App() {

  return (
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/distination">
          <Distination />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
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
  );
}

export default App;
