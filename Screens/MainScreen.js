import { View, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'

const MainScreen = ({ route }) => {
//   console.log("here");
 useEffect(()=>{
    fetch(`http://192.168.29.161:3000/getMeal/${selectedMeal}`)
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
    });
    // console.log("there");

 },[]);

    const { selectedMeal }  = route.params;
  return (
    <View style={styles.container} >
      <Text>{selectedMeal}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     flex:1,
     alignItems:'center',
     justifyContent:'center',
    },
})

export default MainScreen