import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hamburger from './components/Hamburger';

import { useState } from 'react';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  const menu = () => {
    showMenu ? (
      setShowMenu(false)
    ) : (
      setShowMenu(true)
    )
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Hamburger onPress={menu}/>
        <Text style={styles.headerText}>This is my header</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

      {showMenu ? (
        <View>
          <View style={styles.menuContainer}>

          </View>
          <View style={{flex: 1, flexDirection: 'row'}}></View>
        </View>
      ) : (
        <View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 5,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  menuContainer: {
    flex: 1,
    backgroundColor: '#90f',
    flexDirection: 'row',
  },
  header: {
    flex: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    color: '#fff'
  },
});
