import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';

import { Card } from 'react-native-paper';

import logo from './assetsPages/logoInvestment.png'

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>

      <Image style={styles.png} source={logo} />


      <View style={styles.div}>

        <Card style={{backgroundColor: '#F3E373'}}>
          <Text style={styles.paragraph}>Login</Text>
          <TextInput style={styles.input}/>
        </Card>

        <Card style={{backgroundColor: '#F3E373'}}>
          <Text style={styles.paragraph}>Senha</Text>
          <TextInput secureTextEntry={true} style={styles.input}/>
        </Card>
      </View>


      <View style={{gap:15, alignItems:'center'}}>
        <Pressable >

          <Text style={styles.butao}>Entrar</Text>
      
        </Pressable> 

        <Pressable>

          <Text style={styles.senha}>Esqueci minha Senha</Text>

        </Pressable>
      </View>


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
  png: {
    width:288,
    height: 128,

  },
  input: {
    borderWidth: 2,
    width:200,
    height: 25,
    borderRadius:8,
    backgroundColor: '#2E2E2E',
    color: 'white',
    padding: 10

  },
  paragraph: {
    fontSize: 13,
    fontWeight: 300,
    
  },
  div:{
    flex: 0.6,
    justifyContent: 'center',
    gap: 20,
    backgroundColor: '#F3E373',

  },
  butao:{
    color: "white",
    backgroundColor: '#000000',
    padding: 10,
    paddingHorizontal:80,
    borderRadius: 12,
    fontWeight: 600,

  },
  senha:{
    fontWeight: "bold",
    fontSize: 12,
    
  }
});
