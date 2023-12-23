import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";

const ProfileScreen = () => {
  const userData = {
    name: "Sahil Arora",
    email: "sahilaroraji2002@gmail.com",
  };

  const userSuggestions = [
    {
      id: "1",
      name: "Pasta",
      mealType: "Lunch",
    },
    {
      id: "2",
      name: "Salad",
      mealType: "Breakfast",
    },
    {
      id: "3",
      name: "Pizza",
      mealType: "Dinner",
    },
  ];

  const renderMealChip = (mealType) => (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{mealType} </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: "#fff", margin: 0 }]}>
      <View style={styles.profileContainer}>
        <ImageBackground
          source={{ uri: "https://source.unsplash.com/800x600/?food" }}
          style={styles.profileBackground}
        >
          <View style={styles.profileOverlay}>
            <View style={[styles.profileIcon]}>
              <Text style={styles.profileIconText}>
                {userData.name.charAt(0).toUpperCase()}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.welcomeText}>Welcome, {userData.name}! </Text>
      </View>
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsHeader}>Your Added Suggestions</Text>
        <FlatList
          data={userSuggestions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.suggestionItem}>
              <Text style={styles.suggestionName}>{item.name} </Text>
              {renderMealChip(item.mealType)}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileContainer: {
    width: "100%",
    height: "40%",
    marginBottom: 80,
  },
  profileBackground: {
    width: "100%",
    position: "absolute",
    top: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  profileOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    alignItems: "center",
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC8019",
  },
  profileIconText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  infoContainer: {
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: "#FC8019",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  suggestionsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  suggestionsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FC8019",
  },
  suggestionName: {
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  chip: {
    backgroundColor: "#4CAF50", // Green color, change as needed
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  chipText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default ProfileScreen;
