import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = () => (
  <Button icon="camera" mode="contained" buttonColor="purple" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

export default MyComponent;