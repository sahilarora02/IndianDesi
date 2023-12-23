import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { Avatar, Card, IconButton } from "react-native-paper";
import { Chip } from "react-native-paper";
// import { TextAvatar } from "react-native-text-avatar";

const suggests = [
  {
    key: 1,
    title: "Paneer tikka",
    by: "Sahil",
    tag: "Lunch",
  },
  {
    key: 2,
    title: "Corn Flecks",
    by: "Sahil",
    tag: "Breakfast",
  },
  {
    key: 3,
    title: "Petha",
    by: "Sahil",
    tag: "Dinner",
  },
  {
    key: 4,
    title: "Mix Veg",
    by: "Sahil",
    tag: "Lunch",
  },
  {
    key: 5,
    title: "Daal Makhani",
    by: "Sahil",
    tag: "Dinner",
  },

  {
    key: 6,
    title: "Bread Roll",
    by: "Sahil",
    tag: "Breakfast",
  },
  {
    key: 7,
    title: "Paneer tikka",
    by: "Sahil",
    tag: "Lunch",
  },
  {
    key: 8,
    title: "Daal Makhani",
    by: "Sahil",
    tag: "Dinner",
  },
  {
    key: 9,
    title: "Petha",
    by: "Sahil",
    tag: "Dinner",
  },
  {
    key: 10,
    title: "Mix Veg",
    by: "Sahil",
    tag: "Lunch",
  },
  {
    key: 11,
    title: "Corn Flecks",
    by: "Sahil",
    tag: "Breakfast",
  },
  {
    key: 12,
    title: "Bread Roll",
    by: "Sahil",
    tag: "Breakfast",
  },
];

const Icon = ({ name }) => {
  const ch = name.charAt(0);
  return (
    <View style={styles.ico}>
      <Text style={{ color: "white", textAlign: "center", paddingVertical: 5 }}>
        {" "}
        {ch}{" "}
      </Text>
    </View>
  );
};

const MyCard = ({ item, key }) => {
  let color;
  if (item.tag === "Breakfast") color = "#BDE986";
  if (item.tag === "Lunch") color = "#FFDF72";
  if (item.tag === "Dinner") color = "#A6DFFF";

  return (
    <View>
      <Card.Title
        title={item.title}
        // subtitle="Card Subtitle"
        left={(props) => <Icon name={item.by} />}
        right={(props) => (
          <Chip style={{ marginRight: 10, backgroundColor: color }}>
            {" "}
            {item.tag}{" "}
          </Chip>
        )}
      />
      <Divider />
    </View>
  );
};

const AddSuggestionScreen = () => {
  return (
    <View>
      {/* add Suggestions */}
      <View style={styles.addContainer}>
        <Text style={styles.addText}>Add your suggestions : </Text>
        <AntDesign
          name="pluscircle"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Divider style={styles.divide} />
      </View>

      {/* suggestions feeds */}
      <View style={styles.feedsContainer}>
        <FlatList
          data={suggests}
          renderItem={({ item }) => <MyCard item={item} key={item.id} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default AddSuggestionScreen;

const styles = StyleSheet.create({
  addContainer: {
    width: 320,
    height: 80,
    // borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  addText: {
    marginLeft: 10,
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
  },
  divide: {
    width: 280,
    marginLeft: 10,
  },
  feedsContainer: {
    width: 320,
    marginHorizontal: 20,
    height: 550,
    // borderWidth: 1,
    marginTop: 20,
  },
  ico: {
    backgroundColor: "#FC8019",
    borderRadius: 50,
    width: 30,
    height: 30,
  },
});
