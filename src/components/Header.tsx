import React from "react";
import { Image, ImageSourcePropType, ImageStyle, Text, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import AppText from "./Apptext";
import { useNavigation } from "@react-navigation/native";
import { UserImage } from "../constants/icons";

interface props {
  leftIcon?: ImageSourcePropType,
  rightIcon?: ImageSourcePropType,
  rightIcon2?: string,
  title?: string,
  rightIconStyle?:ImageStyle,
  leftIconStyle?:ImageStyle,
  home?:boolean
}

const Header: React.FC<props> = ({ leftIcon, rightIcon, title, rightIcon2,leftIconStyle,rightIconStyle,home }) => {
  const navigation=useNavigation()
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: WIDTH * 0.05,marginTop:HEIGHT*0.03 }}>
      <TouchableOpacity style={{width:WIDTH*0.1,height:WIDTH*0.1,alignItems:"center",justifyContent:"center"}} onPress={home?()=>{}:()=>navigation.goBack()}>
        <Image source={leftIcon} style={[{width:WIDTH*0.06,height:WIDTH*0.06},leftIconStyle]} resizeMode="contain" tintColor={colors.black} />
      </TouchableOpacity>
      <AppText style={{ fontSize: RFValue(16), fontWeight: '700' }}>{title}</AppText>
      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
      <TouchableOpacity style={{width:WIDTH*0.1,height:WIDTH*0.1,alignItems:"center",justifyContent:"center",marginRight:WIDTH*0.02}}>
        <Image source={rightIcon} style={[{width:WIDTH*0.08,height:WIDTH*0.08},rightIconStyle]} resizeMode="contain" tintColor={colors.black}  />
      </TouchableOpacity>
      {rightIcon2 ? <TouchableOpacity style={{width:WIDTH*0.1,height:WIDTH*0.1,alignItems:"center",justifyContent:"center",borderWidth:1,borderRadius:50,}}>
        <Image source={rightIcon2?{uri:rightIcon2}:UserImage} style={{width:WIDTH*0.1,height:WIDTH*0.1,borderRadius:100}} resizeMode="contain"   />
      </TouchableOpacity> : null}
      </View>
    </View>
  );
};

export default Header;