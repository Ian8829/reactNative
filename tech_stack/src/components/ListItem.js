import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
// in actions folder, there are many action
// whenever I want to import many things,
// use import * as <A> from <A>...

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    console.log(this.props);

    return(
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, actions)(ListItem);
// If you don't want to use mapStateToProps
// You must to put null in the first () for argument
// (, actions) return action from action creator
// all of the actions, pass as props

