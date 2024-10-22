import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../../portfolio/src/Pages/Home';
import About from '../../portfolio/src/Pages/About';
import Projects from '../../portfolio/src/Pages/Projects.js';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
