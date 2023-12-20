import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import CustomBtn from "./CustomBtn";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (!user) errors.user = "Username is required";
    if (!pswd) errors.pswd = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validate()) {
      console.log("User=>", user);
      console.log("password=>", pswd);
      setUser("");
      setPswd("");
    }
  };
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        value={user}
        onChangeText={setUser}
        placeholder="Enter User Name"
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
