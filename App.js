import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import OnBoardingScreen from "./Screens/onBoardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import MainScreen from "./Screens/MainScreen";

const Stack = createNativeStackNavigator();

const LogoutButton = ({ onLogoutPress }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    if (onLogoutPress) {
      console.log("here press");
      onLogoutPress(); // Invoke the callback passed from the parent component
    }
  };

  return (
    <Pressable onPress={handleLogout}>
      <Text style={{ color: "white" }}>Logout</Text>
    </Pressable>
  );
};

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const getLoginStatus = async () => {
    const L = (await AsyncStorage.getItem("auth")) || "false";
    setIsLogin(L == "true");
  };

  useEffect(() => {
    getLoginStatus();
  }, []);
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully.");
      await AsyncStorage.setItem("auth", "false");
      setIsLogin(false); // Update the isLogin state
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

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
        {!isLogin ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => (
              <LoginScreen {...props} onLogin={() => setIsLogin(true)} />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="OnBoard"
            component={OnBoardingScreen}
            options={{
              title: "IndianDesi",
              headerRight: () => <LogoutButton onLogoutPress={handleLogout} />,
            }}
          />
        )}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="mainScreen"
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
