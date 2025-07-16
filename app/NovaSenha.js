import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import logo from '../assets/logoInvestment.png'
import back from '../assets/backArrow.png'
import { useRouter } from 'expo-router';

export default function NovaSenha() {

    const router = useRouter()

  return (

    <View style={styles.container}>

        <Pressable onPress={() => router.back()} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20, marginTop: '12%', marginBottom: '-10%',backgroundColor: '#F3E373', border: 'none'}}>
            <Image source={back}/>
        
        </Pressable>

        <Image source={logo} style={{marginTop: '20%', marginBottom: '30%'}}/>

        <View style={styles.caixinhas}>
            <Text style={styles.paragraph}>Nova senha</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.paragraph}>Confirmar nova senha</Text>
            <TextInput style={styles.input}/>
        </View>

        <Pressable onPress={() => router.navigate('/Login')}>
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

  },

  input: {
    borderWidth: 2,
    width: 250,
    height: 30,
    borderRadius: 12,
    backgroundColor: '#2E2E2E',
    color: 'white',
    padding: 10,
    marginBottom: '10%'

  },
  paragraph: {
    fontSize: 13,
    fontWeight: 500,
  
  },

  butao:{
    color: "white",
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal:60,
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 18,
    marginBottom: '45%'
  },

  caixinhas:{
    backgroundColor: '#F3E373',
    flex: 1,
    flexDirection: 'column',
  }

});
