import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import logo from './assetsPages/logoInvestment.png'
import ponte from './assetsPages/ponteInvestment.png'

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{marginTop:30}}/>
      <Image source={ponte}/>

      <View style={{gap:15, alignItems:'center'}}>
        <Pressable >

          <Text style={styles.butao}>Começe Investir</Text>
      
        </Pressable> 

        <Pressable>

          <Text style={styles.senha}>Não tenho uma conta</Text>

        </Pressable>
      </View>

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

  butao:{
    color: "white",
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal:60,
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 18,

  },

  senha:{
    fontWeight: "bold",
    fontSize: 13.5,
    
  }
});
