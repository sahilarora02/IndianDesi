import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import MainScreen from "./Screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator  } from "@react-navigation/native-stack"
import OnBoardingScreen from "./Screens/onBoardingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen options={{
        headerShown:false
      }} name="landingScreen" component={OnBoardingScreen} />
      <Stack.Screen options={{
        headerShown:false
      }} name="mainScreen" component={MainScreen} />
    </Stack.Navigator>
    
  </NavigationContainer>)
}

const styles = StyleSheet.create({
  container: {},
});
