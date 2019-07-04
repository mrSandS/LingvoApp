// @flow

import React from 'react';
import {AppFonts} from '@styles';
import type {TextStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {Text} from 'react-native';

type Props = {
  style: TextStyleProp
};
const CustomText = (props: Props) => {
  return <Text {...props} style={[{fontFamily: AppFonts.REGULAR}, props.style]}/>;
};

export default CustomText;