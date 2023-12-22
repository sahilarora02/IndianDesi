import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../Screens/onBoardingScreen";
import MainScreen from "../Screens/MainScreen";
import { useLogin } from "../context/LoginProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

const MainStack = () => {
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
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="OnBoard"
        component={OnBoardingScreen}
        options={{
          title: "Indian Desi",
          headerRight: () => (
            <Pressable
              onPress={() => clearAsyncStorage()}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                borderColor: "white",
              }}
            >
              <Text style={{ color: "white" }}> Logout </Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: "Recommendations",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
