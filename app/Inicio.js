import { Text, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Inicio(){

    const router = useRouter()

    return (

        <View style={styles.container}>

        
            <Text>Inicio</Text>

            <View style={styles.navBar}>


            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100vh',
        width: '100%',
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    navBar: {
        display: 1,
        position:'absolute',
        bottom:0,
        alignSelf: 'center',
        backgroundColor:'#505050',
        borderRadius: 25,
        height:'89',
        width:'100%',
        marginBottom: 10,

    },
})
