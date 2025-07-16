import { Text,  StyleSheet, SafeAreaView, Pressable, Image, View } from "react-native";
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
        height: '100vh',
        width: '100%',
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'center'
  
    },

    navBar:{
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

    }
})
