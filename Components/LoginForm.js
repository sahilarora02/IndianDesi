import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Alert,
} from "react-native";
import CustomBtn from "./CustomBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";

export default function LoginForm({ onLogin }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!email) errors.email = "Email Id is required";
    if (!pswd) errors.pswd = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const nav = () => {
    onLogin();
    navigation.replace("OnBoard");
  };
  const handleSubmit = async () => {
    if (validate()) {
      try {
        console.log("here");
        const response = await fetch("http://192.168.29.161:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: pswd,
          }),
        });

        const data = await response.json();

        if (response.status === 200) {
          console.log("Login successful:", data);
          await AsyncStorage.setItem("name", data.user.name);
          await AsyncStorage.setItem("auth", "true");

          nav();
        } else {
          console.log("Login failed:", data);
          Alert.alert("login Failed");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
      setEmail("");
      setPswd("");
    }
  };
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email Id"
        style={styles.input}
      />
      {errors.user ? (
        <Text style={styles.errorTxt}> {errors.user} </Text>
      ) : null}
      <TextInput
        value={pswd}
        onChangeText={setPswd}
        placeholder="Enter Password"
        style={styles.input}
        secureTextEntry={true}
      />
      {errors.pswd ? (
        <Text style={styles.errorTxt}> {errors.pswd} </Text>
      ) : null}
      <CustomBtn title="Login" enter={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    borderWidth: 1,
  },
  errorTxt: {
    color: "red",
  },
});
