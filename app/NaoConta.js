import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';

import { Card } from 'react-native-paper';
import { useRouter } from 'expo-router'

import logo from '../assets/logoInvestment.png'
import back from '../assets/backArrow.png'

export default function Login() {

  const router = useRouter()

  return (

    <SafeAreaView style={styles.container}>

    <Pressable onPress={() => router.back()} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20, marginTop: '-20%', marginBottom: '20%',backgroundColor: '#F3E373', border: 'none'}}>
        <Image source={back}/>
    </Pressable>

    <View style={styles.div}>
      
        <View style={{backgroundColor: '#F3E373',}}>
            <Text style={styles.paragraph}>Nome</Text>
            <TextInput style={styles.input}/>
        </View>
      
        <View style={{backgroundColor: '#F3E373',}}>
            <Text style={styles.paragraph}>E-mail</Text>
            <TextInput secureTextEntry={true} style={styles.input}/>
        </View>

        <View style={{backgroundColor: '#F3E373',}}>
            <Text style={styles.paragraph}>Senha</Text>
            <TextInput style={styles.input}/>
        </View>

        <View style={{backgroundColor: '#F3E373',}}>
            <Text style={styles.paragraph}>CPF</Text>
            <TextInput style={styles.input}/>
        </View>

        <View style={{backgroundColor: '#F3E373',}}>
            <Text style={styles.paragraph}>CEP</Text>
            <TextInput style={styles.input}/>
        </View>

        <View style={{backgroundColor: '#F3E373',}}>
            <Text style={styles.paragraph}>Telefone</Text>
            <TextInput style={styles.input}/>
        </View>
      
    </View>

    <Pressable onPress={() => router.navigate('/Login')}>
    
        <Text style={styles.butao}>Confirmar</Text>
          
    </Pressable> 
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E373',
    padding: 8,

  },

  input: {
    borderWidth: 2,
    width: 250,
    height: 30,
    borderRadius: 12,
    backgroundColor: '#2E2E2E',
    color: 'white',
    padding: 10

  },
  paragraph: {
    fontSize: 13,
    fontWeight: 500,
        
  },
  div:{
    flex: 0.6,
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#F3E373',
    marginBottom: '40%'
  },
  
    butao:{
    color: "white",
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal:'23%',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,

  },
  
});
