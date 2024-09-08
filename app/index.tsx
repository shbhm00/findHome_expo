import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { HomeProjects } from "@/src/mockData/homeProjects";
import { styles } from "./styles"
import { Link, router } from "expo-router";
import ScreenWrapper from "@/src/components/ScreenWrapper";

interface HomeProject {
  id: number;
  image: string;
  address: string;
  description: string;
}

const HomeScreen: React.FC = () => {
  
  const handleCardPress = (item: any) => {
    router.navigate("/detail")
    router.setParams(item)
}
  const renderHome = ({ item }: { item: HomeProject }) => (
    <View style={styles.cardContainer}>
      <Pressable onPress={() => handleCardPress(item)}>
        <Image source={{ uri: item.image }} style={styles.homeImage} />
      </Pressable>
      <View style={styles.descriptionContainer}>
        <Text style={styles.homeAddress}>{item.address}</Text>
        <Text style={styles.homeDescription}>{item.description}</Text>
      </View>
    </View>
  );

    const ItemSeparator = () => <View style={styles.itemSeparator} />;
    
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>House Listing</Text>
        <FlatList
          data={HomeProjects}
          renderItem={renderHome}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
