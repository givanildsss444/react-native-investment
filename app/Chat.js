import { Text,  StyleSheet, SafeAreaView, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import back from '../assets/backArrow.png'

export default function Inicio(){

    const router = useRouter()

    return (

        <SafeAreaView style={styles.container}>
         
           <Pressable onPress={() => router.back()} style={{justifyContent: 'space-between', marginTop: '-20%', marginBottom: 50,backgroundColor: '#F3E373', border: 'none'}}>
                   <Image source={back}/>
         
           </Pressable>
                <Text>Chat </Text>
                
              
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100vh',
        width: '100%',
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'center'
  
    },
})
