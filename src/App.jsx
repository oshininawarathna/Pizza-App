import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
