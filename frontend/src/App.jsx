import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen"
import CartScreen from './screen/CartScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3 t-3">
        <Container>
            <h1>Hello React-Commerce</h1>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} exact />
            
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
