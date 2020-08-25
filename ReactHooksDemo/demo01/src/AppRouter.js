import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from './Pages/page1'
import Page2 from './Pages/page2'
import Page3 from './Pages/page3'
import './index.css'

class AppRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { path: '/', title: 'page1', exact: true, temp: Page1 },
        { path: '/Pages/page2', title: 'page2', exact: false, temp: Page2 },
        { path: '/Pages/page3', title: 'page3', exact: false, temp: Page3 },
      ]
    }
  }

  render() {
    return (
      <Router>
        <div className="mainDiv">
          <div className="leftNav">
            <ul>
              {
                this.state.list.map((item, index) => {
                  return (
                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="rightMain">
            {
              this.state.list.map((item, index) => {
                return (
                  <Route key={index} path={item.path} exact={item.exact} component={item.temp} />
                )
              })}

          </div>
        </div>
      </Router>
    )
  }
};

export default AppRouter;