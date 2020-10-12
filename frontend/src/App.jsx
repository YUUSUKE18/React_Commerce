import React from "react";
import {Container} from "react-bootstrap"
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3 t-3">
        <Container>
            <h1>Hello React-Commerce</h1>
            <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
