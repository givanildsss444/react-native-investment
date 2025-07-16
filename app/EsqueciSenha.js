import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../assets/logoInvestment.png'
import back from '../assets/backArrow.png'


export default function EsqueciSenha() {

const router = useRouter()

  return (

    <View style={styles.container}>

        <Pressable onPress={() => router.back()} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20, marginTop: '0%', marginBottom: '-10%',backgroundColor: '#F3E373', border: 'none'}}>
        
                <View>
                  <Image source={back}/>
                </View>
        
        </Pressable>

        <Image source={logo}/>

        <Text>Digite o código enviado no seu e-mail</Text>

        <View style={styles.set}>

            <View style={styles.son}/>
            <View style={styles.son}/>
            <View style={styles.son}/>
            <View style={styles.son}/>

        </View>
    

        <Text style={{marginTop: '-15%'}}>Reenviar código</Text>

        <Pressable onPress={() => router.navigate('/NovaSenha')}>
        
            <Text style={styles.butao}>Confirmar</Text>
              
        </Pressable> 

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

  set:{
    
    flexDirection: 'row',
    gap:20

  },

  son: {
    backgroundColor: '#2c2c2c',
    height:50,
    width:50,
    borderRadius: 10,

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

});
