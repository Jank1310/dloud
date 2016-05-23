import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

// Then we delete a bunch of code from App and
// add some <Link> elements...
export default class App extends React.Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    setup: state.app.setup
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
