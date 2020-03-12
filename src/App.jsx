import React from 'react';
import './App.css';
//importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/CartComponents/Cart';
import Details from './components/Details';
import _default from './components/default';
import Modal from './components/extras/Modal'

function App() {
  return (
    <React.Fragment >
      <Router>
        <Navbar className="container" />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
            <Route component={_default} />
          </Switch>
          <Modal />
      </Router>
    </React.Fragment>
  );
}

export default App;
