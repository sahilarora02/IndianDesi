import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
  Modal,
  Button,
  Pressable
} from "react-native";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
// import Carousel from "react-native-snap-carousel";
// import Carousel from "react-native-reanimated-carousel";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../Components/CarousalCardItem";
import AppConfig from "../config";

// import data from "../data";
import { useNavigation } from "@react-navigation/core";

const MainScreen = ({ route }) => {
  const isCarousel = useRef(null);
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

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

  const handleItemPress = (item) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  return (
    <View>
      <StatusBar barStyle="dark-content" />

      {data ? (
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={({ item, index }) => (
            <CarouselCardItem
              item={item}
              index={index}
              onPress={handleItemPress}
            />
          )}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color="#FC8019"
          style={{ marginTop: 100 }}
        />
      )}

      <Modal
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        animationType='slide'
        presentationStyle="pageSheet"
        style={styles.modalContainer}
      >
        {modalContent && (
          <View style={styles.modalView}>
            <Image
              style={{
                height: 300,
                width: 300,
                borderRadius: 15,
                resizeMode: "stretch",
              }}
              source={{
                uri: modalContent.imageId,
              }}
            />
            <Text style={styles.modalViewText}>{modalContent.title}</Text>
          </View>
        )}
        <Button
          title="Close Button"
          onPress={() => setIsModalOpen(false)}
        ></Button>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalView: {
    resizeMode: "cover",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    backgroundColor: "black",
    alignContent: "center",
    alignItems: "center",
    gap: 25,
  },
  modalViewText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "900",
    // width: 150,
  },
});

export default MainScreen;
