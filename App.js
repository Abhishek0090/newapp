// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import InshortsTab from './components/InshortsTab';

export default function App() {

  return (
    <View style={{ ...styles.container,  }}>
      <InshortsTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },

});
