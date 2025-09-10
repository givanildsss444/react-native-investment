import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Login" 
        options={{ animation: "slide_from_right" }} 
      />
      <Stack.Screen 
        name="Inicio" 
        options={{ animation: "fade" }} 
      />
    </Stack>
  );
}
