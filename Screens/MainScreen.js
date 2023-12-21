import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import Carousel from "react-native-snap-carousel";

const data = [
  {
    title: "Item 1",
    img: "https://tse3.mm.bing.net/th?id=OIP.-w2ELq2BN_O6HSiGQ-h7xAHaE7&pid=Api&P=0&w=300&h=300",
  },
  {
    title: "Item 2",
    img: "https://wallpapercave.com/wp/wp3376127.jpg",
  },
  {
    title: "Item 3",
    img: "https://wallpapercave.com/wp/wp3495556.jpg",
  },
  {
    title: "Item 4",
    img: "https://tse1.mm.bing.net/th?id=OIP.mLg2psW5bI6LnmK9HB-byQHaE6&pid=Api&P=0&w=300&h=300",
  },
  {
    title: "Item 5",
    img: "https://1.bp.blogspot.com/-v4v62BamfFw/UBflbJ7jayI/AAAAAAAACZo/3RPk-55c1uU/s1600/16+1x1half+1+copy.jpg",
  },
  // Add more items as needed
];

const MainScreen = ({ route }) => {
  //   console.log("here");
  useEffect(() => {
    fetch(`http://192.168.29.161:3000/getMeal/${selectedMeal}`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
      });
    // console.log("there");
  }, []);

  const { selectedMeal } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      {console.log(item.img)}
      <Image style={{height:200, width:200}} source={{
        uri:`${item.img}`
      }} />
    </View>
  );
  return (
    <View style={styles.container} >
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={300}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
    alignContent:'center'
  },
  item: {
    flex: 1,
    // height:400,
    // width:400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainScreen;
