import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assetsPages/logoInvestment.png'
import ponte from './assetsPages/ponteInvestment.png'

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Image source={ponte}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E373',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
});
