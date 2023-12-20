import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import CustomBtn from "./CustomBtn";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");
  const handleSubmit = async () => {
    try {
      console.log("here");
      const response = await fetch("http://192.168.29.161:3000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: pswd,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        Alert.alert("Registration Done");
      } else {
        console.log("Login failed:", data);
        Alert.alert("Registration Failed");
      }
    } catch (error) {
      console.error("Error during register:", error);
    }
  };

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email Id"
        style={styles.input}
      />
      <TextInput
        value={pswd}
        onChangeText={setPswd}
        placeholder="Set Password"
        style={styles.input}
        // secureTextEntry={true}
      />
      <CustomBtn title="Register" enter={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    borderWidth: 1,
  },
});
