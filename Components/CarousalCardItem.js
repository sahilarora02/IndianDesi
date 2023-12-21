import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

export const SLIDER_WIDTH = Dimensions.get("window").width - 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {console.log(item.imageId)}
        <Image
          style={{ height: 350, width: 300 }}
          source={{
            uri: `${item.imageId}`,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // borderRadius: 20,
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
  },

  item: {
    flex: 1,
    height: 300,
    width: 300,
    // justifyContent: "center",
    // backgroundColor: "red",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
});

export default CarouselCardItem;
