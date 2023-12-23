import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack"; // Import the MainStack component
import ProfileScreen from "../Screens/ProfileScreen";
import AddSuggestionScreen from "../Screens/AddSuggestionScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const InnerNavigator = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15, // Adjust the font size as needed
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "#fafafa",
        },
      }}
    >
      <Tab.Screen
        name="Main"
        options={{
          title: "Indian Desi",
          headerShown: false,
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
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "black", fontSize: 15 },

          tabBarIcon: () => (
            <Ionicons name="fast-food" color="black" size={24} />
          ),
        }}
        component={MainStack}
      />
      <Tab.Screen
        name="About"
        options={{
          tabBarLabel: "Me",
          tabBarLabelStyle: { color: "black", fontSize: 15 },

          tabBarIcon: () => <Ionicons name="person" color="black" size={24} />,
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Suggestions"
        options={{
          tabBarLabel: "Forum",
          tabBarLabelStyle: { color: "black", fontSize: 15 },

          tabBarIcon: () => (
            <MaterialIcons name="forum" size={24} color="black" />
          ),
        }}
        component={AddSuggestionScreen}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default InnerNavigator;
