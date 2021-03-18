import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Country from './Component/Country/Country';
import Notfound from './Component/NotFound/Notfound';
import CountryDeteil from './Component/CountryDeteil/CountryDeteil';





function App() {
  return (
   <div>
     <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/country">
            <Country></Country>
          </Route>
          <Route path="/countrys/:cntId">
            <CountryDeteil></CountryDeteil>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
             <Notfound></Notfound>
          </Route>
         </Switch>
       </Router>
     </div>
  );
}

export default App;
