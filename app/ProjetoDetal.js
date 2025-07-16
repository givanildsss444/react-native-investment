import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';

import { Card } from 'react-native-paper';
import { useRouter } from 'expo-router'
import back from '../assets/backArrow.png'

export default function Login() {

  const router = useRouter()

  return (

    <SafeAreaView style={styles.container}>

        <Pressable onPress={() => router.back()} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 20, marginTop: '12%', marginBottom: '-10%',backgroundColor: '#F3E373', border: 'none'}}>
            <Image source={back}/>
            
        </Pressable>

        <View style={styles.div}>
            <Text>Projeto Detalhado</Text>
            
        </View>

        <View style={styles.navBar}>
                
            <Pressable onPress={() => router.navigate('/Inicio')}>
                <Text>Casa </Text>
            </Pressable>
                
            <Pressable onPress={() => router.navigate('/TelaInve')}>
                <Text>Investimentos </Text>
            </Pressable>

            <Pressable onPress={() => router.navigate('/Chat')}>
                <Text>Chat </Text>
            </Pressable>

        </View>

    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3E373',

  },
        
  div:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height:'22%',
    width:'85%',
    backgroundColor:'#FFFFFF',
    marginTop:220,
  },

  navBar: {
    display: 'flex',
    flexDirection: 'row',
    position:'absolute',
    bottom:0,
    backgroundColor:'#505050',
    borderRadius: 25,
    height:'89',
    width:'100%',
    marginBottom: 10,
    justifyContent: "space-around",
    alignItems: 'center'
},
  
  
});
