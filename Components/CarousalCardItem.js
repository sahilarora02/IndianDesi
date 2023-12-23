import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";

export const SLIDER_WIDTH = Dimensions.get("window").width - 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCardItem = ({ item, index, press }) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.item}>
          <Image
            style={{ height: 350, width: 300, borderRadius: 20 }}
            source={{ uri: `${item.imageId}` }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <Pressable
            style={styles.QuestionContainer}
            onPress={() => press(item)}
          >
            <Text style={styles.QuestionText}>How to make?</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4E5E9",
    width: 300,
    height: 550,
    top: 100,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    position: "relative",
  },
  item: {
    flex: 1,
    height: 300,
    width: 300,
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
  QuestionContainer: {
    marginLeft: 200,
    marginTop: 20,
  },
  QuestionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0000ff",
  },
});

export default CarouselCardItem;
