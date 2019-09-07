import React, { Component } from 'react';
import Portfolio from '../Components/Portfolio/Portfolio';

export default class PortfolioRoute extends Component {


  render() {
    return (
      <div className="portfolio-pane">
        <Portfolio handleNewRoute={this.props.handleNewRoute}></Portfolio>
      </div>
    )
  }
}