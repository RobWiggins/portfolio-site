import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutRoute from './routes/AboutRoute';
import PortfolioRoute from './routes/PortfolioRoute';
import ContactRoute from './routes/ContactRoute';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  
  state = {
    activePageIdx: 0,
  }

  handleNewRouteRender = (activePageIdx) => {
    this.setState({ activePageIdx: activePageIdx })
  }
  
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <Sidebar handleNewRoute={ this.handleNewRouteRender } activePageIdx={this.state.activePageIdx} />
        </div>
        <main className="content">
          <Switch>
            <Route exact render={props => <AboutRoute {...props} handleNewRoute={this.handleNewRouteRender} />} path="/" />
            <Route render={props => <PortfolioRoute {...props} handleNewRoute={this.handleNewRouteRender} />} path="/portfolio" />
            <Route render={props => <ContactRoute {...props} handleNewRoute={this.handleNewRouteRender} />} path="/contact" />
          </Switch>
        </main>
        <div className="footer">
          <Footer />          
        </div>
      </div>
    );
  }
}
