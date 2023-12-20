import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

const OnBoardingScreen = ({ navigation }) => {
  const buttonsData = [
    { mealType: "Breakfast", color: "rgba(34, 193, 195, 0.8)" },
    { mealType: "Lunch", color: "rgba(255, 153, 0, 0.8)" },
    { mealType: "Dinner", color: "rgba(255, 69, 58, 0.8)" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back, Sahil</Text>
      <LottieView
        source={require("../assets/onBoardingAnimation.json")}
        loop
        autoPlay
        style={{ height: 250, width: 250 }}
      />
      <Text style={styles.description}>
        Spice up your meals and add a dash of joy to your day. From breakfast to
        dinner, we've got the recipes that'll make your family smile!
      </Text>
      <View style={styles.QuestionContainer}>
        <Text style={styles.QuestionText}>
          Aaj {`\u2728`}Khana{`\u2728`} main kya banau?
        </Text>
      </View>
      <View style={styles.buttonGrid}>
        {buttonsData.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.buttonCard, { borderColor: button.color }]}
            onPress={() => {
              navigation.navigate("mainScreen", {
                selectedMeal: button.mealType,
              }) 
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
    fontStyle:'italic'
  },
  QuestionContainer: {
    backgroundColor: "#e62e00",
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
