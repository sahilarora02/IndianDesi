import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Divider } from "react-native-paper";

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
      {/* <StatusBar barStyle="dark-content" /> */}

      <Text style={styles.heading}> Indian Desi </Text>
      <View style={styles.gifBack}>
        <LottieView
          source={require("../assets/onBoardingAnimation.json")}
          loop
          autoPlay
          style={{ height: 200, width: 250 }}
        />
      </View>

      {/* <Text style={styles.description}>
        IndianDesi wants to answer the most frequently asked question by every
        MOM:
      </Text> */}
      <View style={styles.whiteback}>
        <View style={styles.QuestionContainer}>
          <Text style={styles.QuestionText}>Aaj Khane main kya banau?</Text>
        </View>
        <View style={styles.buttonGrid}>
          {buttonsData.map((button, index) => (
            <View key={index}>
              <View style={styles.singleBtn} key={index}>
                <TouchableOpacity
                  key={index}
                  style={[styles.buttonCard]}
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
                <Text style={{ marginTop: 25, color: "#454545" }}> {">"} </Text>
              </View>
              <Divider />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
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
    // backgroundColor: "#FC8019",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginTop: 90,
  },
  QuestionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    // color: "#fff",
    // textShadowColor: "rgba(0, 0, 0, 0.5)",
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 2,
  },
  buttonGrid: {
    marginTop: 50,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonCard: {
    // borderWidth: 2,
    borderRadius: 10,
    width: 300, // Adjust as needed
    // alignItems: "center",
    padding: 10,
    paddingBottom: 2,
    marginBottom: 5,
    marginTop: 20,
    // shadowColor: "yellow",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    // textAlign: "center",
  },
  container: {
    padding: 25,
    alignItems: "center",
    backgroundColor: "#FC8019",
  },
  whiteback: {
    backgroundColor: "white",
    height: 550,
    width: 360,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: "center",

    marginTop: -60,
    zIndex: -5,
  },
  gifBack: {
    backgroundColor: "white",
    borderRadius: 100,
    marginTop: 30,
    borderWidth: 5,
    borderColor: "#FFA90A",
  },
  singleBtn: {
    justifyContent: "space-around",
    flexDirection: "row",
    display: "flex",
  },
});

export default OnBoardingScreen;
