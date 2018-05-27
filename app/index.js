import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $white: '#FFFFFF',
  $primaryBlue: '#4F6D7A',
});

export default () => <Home />;
