import React from "react";
import {connect} from "react-redux"

import "./top-nav.css";

export class TopNav extends React.Component {

  render() {
    return (
      <nav>
        <ul className="clearfix">
          <li>
            <a className="what" href="#" 
              onClick={e => {
                        e.preventDefault();
                        this.props.dispatch(toggleInfo());
                        }
                      }>
              What?
            </a>
          </li>
          <li>
            <a className="new" href="#" 
              onClick={e => {
                        e.preventDefault();
                        this.props.dispatch(newGame());
                        }
                      }>
              + New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect()(TopNav);