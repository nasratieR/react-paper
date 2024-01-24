import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyModal from './components/modal';
import DropdownList from './components/list';

export default function App() {
  const listePrenoms = [
    { prenom: 'Devin' },
    { prenom: 'Dan' },
    { prenom: 'Dominic' },
    { prenom: 'Jackson' },
    { prenom: 'James' },
    { prenom: 'Joel' },
    { prenom: 'John' },
    { prenom: 'Jillian' },
    { prenom: 'Jimmy' },
    { prenom: 'Julie' },
  ];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <MyModal/>
      <StatusBar style="auto" />
      <DropdownList title="Volontaires" items={listePrenoms} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
