import * as React from 'react';
import { Button } from 'react-native-paper';

const MyButton = () => (
  <Button icon="camera" mode="contained" buttonColor="purple" textColor="white" onPress={() => console.log('Pressed')}>
    Click
  </Button>
);

export default MyButton;