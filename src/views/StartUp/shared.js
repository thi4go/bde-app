import React from 'react';
import { View, Image } from 'react-native';

export const LogoContainer = (props) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}
  />

);

export const Logo = (props) => (
  <Image source={require('../../images/004.png')} style={{width: props.width, height: props.height }} />    
);