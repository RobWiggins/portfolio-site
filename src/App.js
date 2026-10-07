import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AboutRoute from './routes/AboutRoute';
import PortfolioRoute from './routes/PortfolioRoute';
import ContactRoute from './routes/ContactRoute';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname && !location.hash) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className="site">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Sidebar />
        <main id="main-content" className="content">
          <Switch>
            <Route exact path="/" component={AboutRoute} />
            <Route path="/portfolio" component={PortfolioRoute} />
            <Route path="/contact" component={ContactRoute} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
