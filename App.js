import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import OnBoardingScreen from "./Screens/onBoardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Stack = createNativeStackNavigator();

const LogoutButton = () => {
  const navigation = useNavigation();

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
      await AsyncStorage.setItem("auth", "false");

      navigation.navigate("Login");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <Pressable onPress={() => clearAsyncStorage()}>
      <Text style={{ color: "white" }}>Logout</Text>
    </Pressable>
  );
};

export default function App() {
  let isLogin;
  const getLoginStatus = async () => {
    isLogin = (await AsyncStorage.getItem("auth")) || "false";
    console.log("isLogin=>", isLogin);
  };

  useEffect(() => {
    getLoginStatus();
  }, []);

  return (
    <NavigationContainer>
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
        {isLogin == "false" && (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="OnBoard"
          component={OnBoardingScreen}
          options={{
            title: "IndianDesi",
            headerRight: () => <LogoutButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
