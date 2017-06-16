import React, { Components } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Components {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};
// take our global state
// map it the state and use to props

export default connect(mapStateToProps)(LibraryList);