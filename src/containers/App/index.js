import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'

// import { setTheme, themes } from '../../actions'
import OnPageTransition from 'utils/OnPageTransition'
import Home from 'containers/Home'
import Article from 'containers/Article'
import Music from 'containers/Music'
import About from 'containers/About'
import NoMatch from 'containers/NoMatch'
import Footer from 'containers/Footer'

import Nav from 'containers/Nav';

const LoadableHome = Loadable({
  loader: () => import('containers/Home'),
  loading() {
    return <div/>
  }
});

// {this.props.notification.isVisible ? <Notification/> : null}

class App extends Component {
  render() {
    return [
      <OnPageTransition key={1}/>,
      <Nav key={2}/>,
      <Switch key={3}>
        <Route path="/" exact component={Home}/>
        {!PRODUCTION && <Route path="/article" component={Article}/>}
        {!PRODUCTION && <Route path="/music" component={Article}/>}
        {!PRODUCTION && <Route path="/article" component={Article}/>}
        <Route component={NoMatch}/>
      </Switch>,
      <Footer key={4}/>
    ]
  }
}

export default App;
