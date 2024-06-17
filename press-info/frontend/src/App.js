import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SportInfo from './pages/SportInfo';
import Meteo from './pages/Meteo';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import AdminLogin from './pages/AdminLogin';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sportinfo" component={SportInfo} />
          <Route path="/meteo" component={Meteo} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/admin" component={AdminLogin} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

