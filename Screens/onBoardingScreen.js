import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoardingScreen = ({ route }) => {
  const navigation = useNavigation();

  const [name, setName] = useState();

  const getName = async () => {
    const n = await AsyncStorage.getItem("name");
    setName(n);
  };

  useEffect(() => {
    getName();
  }, []);

  console.log("onboard");
  const buttonsData = [
    { mealType: "Breakfast", color: "rgba(34, 193, 195, 0.8)" },
    { mealType: "Lunch", color: "rgba(255, 153, 0, 0.8)" },
    { mealType: "Dinner", color: "rgba(255, 69, 58, 0.8)" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back, {name} </Text>
      <LottieView
        source={require("../assets/onBoardingAnimation.json")}
        loop
        autoPlay
        style={{ height: 200, width: 250 }}
      />
      <Text style={styles.description}>
        IndianDesi wants to answer the most frequently asked question by every
        MOM:
      </Text>
      <View style={styles.QuestionContainer}>
        <Text style={styles.QuestionText}>
          Aaj {`\u2728`}Khane{`\u2728`} main kya banau?
        </Text>
      </View>
      <View style={styles.buttonGrid}>
        {buttonsData.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.buttonCard, { borderColor: button.color }]}
            onPress={() => {
              // Add your navigation logic here
              navigation.navigate("MainScreen", {
                selectedMeal: button.mealType,
              });
              // console.log(`Button pressed for ${button.mealType}`);
            }}
          >
            <Text style={styles.buttonText}>{button.mealType}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  QuestionContainer: {
    backgroundColor: "#FC8019",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  QuestionText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonGrid: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonCard: {
    borderWidth: 2,
    borderRadius: 10,
    width: 300, // Adjust as needed
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    padding: 25,
    alignItems: "center",
  },
});

export default OnBoardingScreen;
