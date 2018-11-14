import React from 'react';
import SimpleAppBar from './header.js';
import './index.css';


class Frame extends React.Component {
  render() {
    return (
      <div className="frame">

        <div className="frame-header">
          <SimpleAppBar></SimpleAppBar>
          
        </div>

        <div className="game-info">
          <div>Hey</div>
          <ol>You</ol>
        </div>
      </div>
    );
  }
}

export default Frame;
