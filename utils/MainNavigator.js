import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import { useLogin } from "../context/LoginProvider";
import InnerNavigator from "./InnerNavigator";

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FC8019",
        },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        contentStyle: {
          backgroundColor: "#E4E5E9",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function MainNavigator() {
  const { isLogin } = useLogin();

  return isLogin ? <InnerNavigator /> : <LoginNavigator />;
}
