import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

  return(
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        Click me!
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#910024',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    // expand as possible as i can
    alignSelf: 'stretch',
    // stretch the fills of the container
    backgroundColor: '#fff8e0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#910024',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;