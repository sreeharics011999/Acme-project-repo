import { Image, TextInput, View, ViewStyle } from "react-native"
import { colors, HEIGHT, WIDTH } from "../constants/constants"
import { searchIcon } from "../constants/icons"
import React, { useState } from "react"

interface props{
    style?:ViewStyle,
    users?:any
}

const SearchBar:React.FC<props> = ({style,users}) => {
    const [search, setSearch] = useState("");

const filteredUsers = users?.filter((item) => {
  const searchText = search.toLowerCase();
  return (
    item.name.toLowerCase().includes(searchText) ||
    item.email.toLowerCase().includes(searchText)
  );
});
    return (
        <View style={[{ borderWidth: 1, borderColor: colors.grey, borderRadius: 10, marginTop: HEIGHT * 0.01, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },style]}>
            <Image style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, marginRight: WIDTH * 0.03 }} resizeMode="contain" tintColor={colors.grey} source={searchIcon} />
            <TextInput
                allowFontScaling={false}
                style={{ flex: 1, height: HEIGHT * 0.05, color: colors.black }}
                placeholder='search user... '
                placeholderTextColor={colors.grey}
                onChangeText={(text)=>setSearch(text)}
            />
        </View>
    )
}
export default SearchBar