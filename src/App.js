import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutRoute from './routes/AboutRoute';
import PortfolioRoute from './routes/PortfolioRoute';
import ContactRoute from './routes/ContactRoute';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Sidebar className="sidebar" />
        <main className="content">
          <Switch>
            <Route exact component={AboutRoute} path="/" />
            <Route component={PortfolioRoute} path="/portfolio" />
            <Route component={ContactRoute} path="/contact" />
          </Switch>
        </main>
        <Footer className="footer" />
      </div>
    );
  }
}
