import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./utils/MainNavigator";
import LoginProvider from "./context/LoginProvider";

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}
