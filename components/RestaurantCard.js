import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, LocationMarkerIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imageUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={24} color="gray" />
          <Text className="text-xs text-green-500">
            <Text className="text-gray-500">
              {rating} &#8226; {genre}
            </Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon size={24} color="gray" opacity={0.4} />

          <Text className="text-xs text-gray-500">
            Nearby &#8226; {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
