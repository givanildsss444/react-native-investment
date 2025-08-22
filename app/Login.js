import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';

  import { Card } from 'react-native-paper';
  import { useRouter } from 'expo-router'
  import { auth } from '../firebase.config';
  import { signInWithEmailAndPassword } from 'firebase/auth'; 
  import { useState } from 'react';

  import logo from '../assets/logoInvestment.png'
  import back from '../assets/backArrow.png'

  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const router = useRouter()

    async function Authentication(){
      try{
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        console.log(user);
      }
      catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( `Error Code: ${errorCode}` )
        console.log( `Error Message: ${errorMessage}` )
      };
    }

  return (

    <SafeAreaView style={styles.container}>

      <Pressable onPress={() => router.back()} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20, marginTop: '-20%', marginBottom: 50,backgroundColor: '#F3E373', border: 'none'}}>
          <Image source={back}/>

      </Pressable>

      <Image style={styles.png} source={logo} />


      <View style={styles.div}>

        <View style={{backgroundColor: '#F3E373'}}>
          <Text style={styles.paragraph}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={a => setEmail(a)}/>
        </View>

        <View style={{backgroundColor: '#F3E373'}}>
          <Text style={styles.paragraph}>Senha</Text>
          <TextInput secureTextEntry={true} style={styles.input} value={senha} onChangeText={a => setSenha(a)}/>
        </View>

      </View>


      <View style={{gap:15, alignItems:'center'}}>
        <Pressable onPress={Authentication}>

          <Text style={styles.butao}>Entrar</Text>
      
        </Pressable> 

        <Pressable onPress={() => router.navigate('/EsqueciSenha')}>

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
    width: 250,
    height: 30,
    borderRadius: 12,
    backgroundColor: '#2E2E2E',
    color: 'white', 
    padding: 5,

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

  },
  butao:{
    color: "white",
    backgroundColor: '#000000',
    padding: 15,
    paddingHorizontal:100,
    marginBottom: 5,
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,

  },
  senha:{
    fontWeight: "bold",
    fontSize: 14,
    
  }
});
