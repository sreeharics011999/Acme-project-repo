import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import { Header, SearchBar, UserCard } from "../components";
import { backIcon, filterIcon } from "../constants/icons";
import { useState } from "react";

const userJson = [
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "firstName": "Emma",
    "lastName": "Stone",
    "email": "emma@example.com"
  },
]

const UserlistScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const filteredUsers = userJson?.filter((item) => {
    const searchText = search.toLowerCase();
    return (
      item.firstName.toLowerCase().includes(searchText) ||
      item.email.toLowerCase().includes(searchText) || item.lastName.toLowerCase().includes(searchText)
    );
  });
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <Header leftIcon={backIcon} title="users" />
      <View style={{ marginTop: HEIGHT * 0.03, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", gap: WIDTH * 0.02, paddingHorizontal: WIDTH * 0.05, paddingBottom: HEIGHT * 0.02 }}>
        <SearchBar style={{ width: WIDTH * 0.8 }} onchangeText={(text) => setSearch(text)} />
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={filterIcon} style={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} resizeMode="contain" tintColor={colors.black} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => <UserCard item={item} onPress={() => navigation.navigate('userdetailscreen', { item })} />}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: WIDTH * 0.05 }}
      />
    </View>
  );
};

export default UserlistScreen;