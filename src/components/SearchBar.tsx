import { Image, TextInput, View, ViewStyle } from "react-native"
import { colors, HEIGHT, WIDTH } from "../constants/constants"
import { searchIcon } from "../constants/icons"
import React, { useState } from "react"

interface props{
    style?:ViewStyle,
    onchangeText:(text:string)=>void
}

const SearchBar:React.FC<props> = ({style,onchangeText}) => {
  
    return (
        <View style={[{ borderWidth: 1, borderColor: colors.grey, borderRadius: 10, marginTop: HEIGHT * 0.01, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },style]}>
            <Image style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, marginRight: WIDTH * 0.03 }} resizeMode="contain" tintColor={colors.grey} source={searchIcon} />
            <TextInput
                allowFontScaling={false}
                style={{ flex: 1, height: HEIGHT * 0.05, color: colors.black }}
                placeholder='search user... '
                placeholderTextColor={colors.grey}
                onChangeText={onchangeText}
            />
        </View>
    )
}
export default SearchBar