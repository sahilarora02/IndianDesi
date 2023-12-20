import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

export default function CustomBtn({ title, enter }) {
  return (
    <Pressable onPress={() => enter()} style={styles.mainBtn}>
      <View style={styles.btn}>
        <Text style={styles.btnText}> {title} </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainBtn: {
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 20,
  },
  btn: {
    paddingHorizontal: 20,

    height: 50,
    backgroundColor: "#FE8A00",
    borderRadius: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  btnText: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
