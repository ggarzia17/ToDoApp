import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './ui/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        <Text style = {styles.text}>Test</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#002300',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
