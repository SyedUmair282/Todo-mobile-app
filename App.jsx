
import React from 'react';
import { StyleSheet} from 'react-native';
import Navigate from './Config/navigation.jsx'

export default function App() {
  return (
    <Navigate />
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
