import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, Pressable, SafeAreaView, Animated, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../firebase.config";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';



const { width } = Dimensions.get("window");

export default function Inicio() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current; // começa fora da tela

  const user = auth.currentUser

  const toggleDrawer = () => {
    if (isOpen) {
      // fechar
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsOpen(false));
    } else {
      // abrir
      setIsOpen(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.navBar}>
        <View style={styles.details}></View>

        <Pressable>
          <FontAwesome name="home" size={40} color="white" />  
        </Pressable>        

        <Pressable onPress={() => router.push("/TelaInve")}>
          <FontAwesome name="dollar" size={40} color="white" />
        </Pressable>

        <Pressable onPress={() => router.push("/Chat")}>
          <Ionicons name="chatbubble" size={40} color="white" />
        </Pressable>
      </View>

      {/* Botão do Drawer */}
      <Pressable onPress={toggleDrawer}>
        <View style={styles.drawer}>
          <Text style={styles.more}>☰ Menu</Text>
        </View>
      </Pressable>

      <View style={{borderColor:"red", borderWidth:2,  alignItems:"center"}}>
      <Text>{user.email}</Text>
      <Text>{user.uid}</Text>
      
      </View>

      {/* Drawer animado */}
      {isOpen && (
        <Animated.View
          style={[
            styles.drawerMenu,
            { transform: [{ translateX: slideAnim }] },
          ]}
        >
          <Text style={styles.drawerTitle}>Menu</Text>
          <Pressable onPress={() => router.push("/Perfil")}>
            <Text style={styles.drawerItem}>Perfil</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/Config")}>
            <Text style={styles.drawerItem}>Configurações</Text>
          </Pressable>
          <Pressable onPress={() => router.navigate("/")}>
            <Text style={styles.drawerClose}>Sair</Text>
          </Pressable>

        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },

  details: {
    height:"100vh",
    width: 30,
    backgroundColor: '#777777',
s
  },

  navBar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#505050",
    borderRadius: 20,
    height: 89,
    width: "100%",
    
    justifyContent: "space-around",
    alignItems: "center",
  },

  drawer: {
    backgroundColor: "black",
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 20,
    borderRadius: 10,
  },

  more: {
    color: "white",
    fontSize: 16,
  },

  drawerMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: width * 0.7, // ocupa 70% da tela
    backgroundColor: "#333",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  drawerTitle: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
  },

  drawerItem: {
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },

  drawerClose: {
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
});
