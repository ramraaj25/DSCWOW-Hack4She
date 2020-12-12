import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Locations from './Locations'

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/blog'>
            <Navbar />
          </Route>
          <Route path='/locations'>
            <Locations />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
