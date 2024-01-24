import * as React from 'react';
import { Modal, Portal, Button, Text, PaperProvider } from 'react-native-paper';
import MyButton from './button';

const MyModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        
        <MyButton onPress={showModal}/>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30, width: 200}} onPress={showModal}>
          Camera
      </Button>
    </PaperProvider>
  );
};

export default MyModal;