import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon, UserIcon,AdjustmentsIconj, AdjustmentsIcon, SearchIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row pb-3 items-center space-x-2 px-4">
        <Image
          className="w-7 h-7 bg-gray-300 rounded-full p-4"
          source={{
            uri: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3293449/settings_images/3DQ6jYtpQLy6njXpZRot_file.jpg",
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs ">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00ccbb"/>
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb"/>
      </View>

      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="#00ccbb" size={20}/>
          <TextInput placeholder="Restaurants and cousines" keyboardType="default"/>
        </View>
        <AdjustmentsIcon color="#00ccbb" />
      </View>

      <ScrollView className="bg-gray-100">
        {/* categories */}
        <Categories /> 

        {/* features rows*/}
      </ScrollView>


    </SafeAreaView>
  );
};

export default HomeScreen;
