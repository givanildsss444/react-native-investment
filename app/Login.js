import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, Pressable, KeyboardAvoidingView, Platform } from 'react-native';

  import {ActivityIndicator } from 'react-native-paper';
  import { useRouter } from 'expo-router'
  import { auth } from '../firebase.config';
  import { signInWithEmailAndPassword } from 'firebase/auth'; 
  import { useState } from 'react';
  

  import logo from '../assets/logoInvestment.png'
  import back from '../assets/backArrow.png'

  
  export default function Login() {
    const [email, setEmail] = useState("glf2@aluno.ifal.edu.br");
    const [senha, setSenha] = useState("123456");
    const [errorText, setErrorText] = useState("")
    const [loading, setLoading] = useState(false)
    

      const router = useRouter()

      async function Authentication(){

        setLoading(true)
        try{  
          const userCredential = await signInWithEmailAndPassword(auth, email, senha);
          const user = userCredential.user;

          console.log(user);
          router.navigate("/Inicio")
          setErrorText("")
          
        }
        catch (error) {
          const errorCode = error.code;

          console.log(errorCode)

          if(!email){
            setErrorText("Insira um email")
          }
          else if(errorCode === "auth/invalid-email"){
            setErrorText("Email inválido.");
          }
          else if(!senha){
            setErrorText("Insira uma senha");
          } 
          else if(errorCode === "auth/wrong-password"){
            setErrorText("Senha incorreta.");
          }
          else if(errorCode === "auth/user-not-found"){
            setErrorText("Usuário não encontrado.");
          }
          else {
            setErrorText("Erro ao fazer login. Tente novamente.");
          }

         setTimeout(() => {
          setErrorText("")

         },4000)

         
        }
        finally{
          setLoading(false)

        };

      }

    return (
      
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}} enabled={true}>
      
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

        {errorText ? (
        <View style={styles.errorBox}>

          <Text style={styles.errorText}>{errorText}</Text>

        </View>
      ) : null}

        <View style={{gap:15, alignItems:'center'}}>
          <Pressable onPress={Authentication} disabled={loading}>


            {loading ? 
              (
                <ActivityIndicator animating={true} color="black" />
              ): 
              (
                <Text style={styles.butao}>Entrar</Text>
              )
            }

            
            
        
          </Pressable> 

          <Pressable onPress={() => router.navigate('/EsqueciSenha')}>

            <Text style={styles.senha}>Esqueci minha Senha</Text>

          </Pressable>
        </View>



      </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E373',
    padding: 8,
    height: "100%",
    width: "100%"

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
    
  },

  errorBox: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  errorText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
