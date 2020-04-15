import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Container />
          <Route exact path ="/react-portfolio" component ={About} />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path ="/Contact" component ={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
