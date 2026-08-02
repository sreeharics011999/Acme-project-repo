import { Image, ImageProps, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import AppText from "./Apptext";
import { RFValue } from "react-native-responsive-fontsize";
import React from "react";
import { colors, HEIGHT, WIDTH } from "../constants/constants";

interface props {
  title: string,
  style?: ViewStyle,
  textStyle?: TextStyle,
  icon?:ImageProps,
  onPress?:()=>void
}

const Button: React.FC<props> = ({ title, textStyle, style,icon,onPress }) => {
  return (
    <TouchableOpacity style={[{ backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", paddingVertical: HEIGHT * 0.022, borderRadius: 10 }, style]} onPress={onPress}>
      {icon?<Image style={{ width: WIDTH * 0.05, height: WIDTH * 0.05,marginRight:WIDTH*0.03 }} resizeMode="contain" source={icon} />:null}
      <AppText style={[{ fontSize: RFValue(16),color:colors.white,fontWeight:"700"}, textStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default Button;