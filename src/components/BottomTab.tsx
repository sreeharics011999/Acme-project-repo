import { Image, Text, TouchableOpacity, View } from "react-native";
import { favoriteIccon, homeIcon, profileIcon, usersIcon } from "../constants/icons";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import AppText from "./Apptext";
import { RFValue } from "react-native-responsive-fontsize";
import { useState } from "react";

const bottomJson = [
  { name: 'home', icon: homeIcon, navigation: 'dashboard' },
  { name: 'users', icon: usersIcon, navigation: 'users' },
  { name: 'favorite', icon: favoriteIccon, navigation: 'favourite' },
  { name: 'profile', icon: profileIcon, navigation: 'profile' },
]

const BottomTab = ({ state, navigation }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: colors.white, elevation: 3 }}>
      {bottomJson.map((item, index) => {
        const focused = state.index === index
        return (
          <TouchableOpacity onPress={() => navigation?.navigate(item?.navigation)} key={index?.toString()} style={{ alignItems: "center", justifyContent: "center", width: WIDTH * 0.25, paddingVertical: HEIGHT * 0.01 }}>
            <Image source={item?.icon} style={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} resizeMode="contain" tintColor={focused ? colors.primary : colors.grey} />
            <AppText style={{ fontSize: RFValue(10), color: focused ? colors.primary : colors.grey, width: WIDTH * 0.25, textAlign: "center", marginTop: HEIGHT * 0.003, textTransform: "capitalize" }}>{item?.name}</AppText>
          </TouchableOpacity>)
      })}
    </View>
  );
};

export default BottomTab;