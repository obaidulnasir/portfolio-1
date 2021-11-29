import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home/Home';
import Navigation from './components/pages/Shared/Navigation';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navigation></Navigation>
        <Switch>
          <Route path="/home">
              <Home></Home>
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
