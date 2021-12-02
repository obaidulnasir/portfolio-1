import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home/Home';
import Navigation from './components/pages/Shared/Navigation';
import Project from './components/pages/Project/Project';
import Contact from './components/pages/Shared/Contact';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/project">
              <Project></Project>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="/admin1">
              <Admin></Admin>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
