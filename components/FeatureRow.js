import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";

const FeatureRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={24} color="#00ccbb" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >

        <RestaurantCard
          id={1}
          imageUrl="https://img.freepik.com/free-photo/mexican-delicious-fried-egg-rolls-with-lettuce-avocadoes-onions-tomatoes_181624-41955.jpg"
          title="Nando's"
          rating="4.8"
          genre="Japanese"
          address="Clink Street"
          shortDescription="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imageUrl="https://img.freepik.com/free-photo/mexican-delicious-fried-egg-rolls-with-lettuce-avocadoes-onions-tomatoes_181624-41955.jpg"
          title="Nando's"
          rating="4.8"
          genre="Japanese"
          address="Clink Street"
          shortDescription="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imageUrl="https://img.freepik.com/free-photo/mexican-delicious-fried-egg-rolls-with-lettuce-avocadoes-onions-tomatoes_181624-41955.jpg"
          title="Nando's"
          rating="4.8"
          genre="Japanese"
          address="Clink Street"
          shortDescription="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={1}
          imageUrl="https://img.freepik.com/free-photo/mexican-delicious-fried-egg-rolls-with-lettuce-avocadoes-onions-tomatoes_181624-41955.jpg"
          title="Nando's"
          rating="4.8"
          genre="Japanese"
          address="Clink Street"
          shortDescription="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
