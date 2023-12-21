import { View, Text, StyleSheet, Image } from "react-native";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
// import Carousel from "react-native-snap-carousel";
// import Carousel from "react-native-reanimated-carousel";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../Components/CarousalCardItem";
import AppConfig from '../config';

// import data from "../data";
import { useNavigation } from "@react-navigation/core";

const MainScreen = ({ route }) => {
  const isCarousel = useRef(null);
  const navigation = useNavigation();
  const [data, setData] = useState();

  const { selectedMeal } = route.params;
  useEffect(() => {
    fetch(`${AppConfig.apiUrl}/getMeal/${selectedMeal}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        return response.json();
      })
      .then((resp) => {
        setData(resp.data);
      });
  }, [selectedMeal]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: selectedMeal });
  }, [navigation, selectedMeal]);

  return (
    <View>
      {/* <Text> {selectedMeal} </Text> */}
      {data && (
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      )}
    </View>
  );
};

export default MainScreen;
