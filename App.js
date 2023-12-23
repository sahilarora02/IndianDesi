import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./utils/MainNavigator";
import LoginProvider from "./context/LoginProvider";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <PaperProvider>
          <MainNavigator />
        </PaperProvider>
      </NavigationContainer>
    </LoginProvider>
  );
}
