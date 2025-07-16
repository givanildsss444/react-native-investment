import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, Pressable } from 'react-native';

import { Card } from 'react-native-paper';
import { useRouter } from 'expo-router'

export default function Login() {

  const router = useRouter()

  return (

    <SafeAreaView style={styles.container}>

        <View style={styles.div}>
            <Pressable onPress={() => router.navigate('/ProjetoDetal')}>
            <Text>Cachorro Robo </Text>
            </Pressable>
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
    backgroundColor:'#505050',
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
