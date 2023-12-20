import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import CustomBtn from "./CustomBtn";

export default function RegisterForm() {
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const handleSubmit = () => {
    console.log("User=>", user);
    console.log("password=>", pswd);
  };
  return (
    <View>
      <TextInput
        value={user}
        onChangeText={setUser}
        placeholder="Set User Name"
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
