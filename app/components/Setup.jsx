import React from 'react';
import {connect} from 'react-redux';

const getSetup = (setup) => {
    return setup;
}

const mapStateToProps = (state) => {
    return {
        setup: getSetup(state.setup)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Add mthods
        // onV: (id) => {
        //   dispatch(toggleTodo(id))
        // }
    }
}

class Setup extends React.Component {
  render() {
    return <div>Setup!</div>;
  }
}


const SetupContainer = connect(mapStateToProps, mapDispatchToProps)(Setup);
export default SetupContainer;
