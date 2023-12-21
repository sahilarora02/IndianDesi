import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
} from "react-native";
import logo from "../assets/IndianDesi.png";
import LoginForm from "../Components/LoginForm";
import { useState, useEffect, useLayoutEffect } from "react";
import RegisterForm from "../Components/RegisterForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={styles.loginMain}>
      <ScrollView>
        <View style={styles.circle1}>
          <Text style={styles.loginTxt}> {isLogin ? "LOGIN" : "REGISTER"}</Text>
        </View>

        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={logo} />
        </View>

        {isLogin ? (
          <>
            <LoginForm />
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                paddingTop: 150,
              }}
            >
              New User ?
              <Pressable onPress={() => setIsLogin(false)}>
                <Text style={{ color: "#FE8A00" }}> Register Here</Text>
              </Pressable>
            </Text>
          </>
        ) : (
          <>
            <RegisterForm />
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                paddingTop: 80,
              }}
            >
              Now
              <Pressable onPress={() => setIsLogin(true)}>
                <Text style={{ color: "#FE8A00" }}>Login Here.</Text>
              </Pressable>
            </Text>
          </>
        )}

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginMain: {
    flex: 1,
    backgroundColor: "#E4E5E9",
    // height: 100,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 170,
  },
  logoImg: {
    width: 200,
    height: 160,
  },
  circle1: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -60, // Adjust the position as needed
    left: -60, // Adjust the position as needed
    width: 220,
    height: 220,
    backgroundColor: "#FC8019",
    borderRadius: 125,
  },
  loginTxt: {
    color: "white", // Color of the text
    fontSize: 22, // Font size of the text
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 40,
    letterSpacing: 4,
  },
});
