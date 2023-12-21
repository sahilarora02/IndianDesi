import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./utils/MainNavigator";
import LoginProvider from "./context/LoginProvider";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
        {/* <StatusBar /> */}
      </NavigationContainer>
    </LoginProvider>
  );
}
