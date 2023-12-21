import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../Screens/onBoardingScreen";
import { useLogin } from "../context/LoginProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const InNavigator = () => {
  const { setIsLogin } = useLogin();
  const clearAsyncStorage = async () => {
    console.log("in logout");
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
      await AsyncStorage.setItem("auth", "false");
      setIsLogin(false);
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };
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
        name="OnBoard"
        component={OnBoardingScreen}
        options={{
          title: "IndianDesi",
          headerRight: () => (
            <Pressable onPress={() => clearAsyncStorage()}>
              <Text> Logout </Text>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default function InnerNavigator() {
  return <InNavigator />;
}
