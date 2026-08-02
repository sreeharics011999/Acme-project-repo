import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import { Header, SearchBar, UserCard } from "../components";
import { backIcon, filterIcon } from "../constants/icons";

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
  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <Header leftIcon={backIcon} title="users" />
      <View style={{ marginTop: HEIGHT * 0.03, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", gap: WIDTH * 0.02, paddingHorizontal: WIDTH * 0.05, paddingBottom: HEIGHT * 0.02 }}>
        <SearchBar style={{ width: WIDTH * 0.8 }} users={userJson}/>
        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={filterIcon} style={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} resizeMode="contain" tintColor={colors.black} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={userJson}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => <UserCard item={item} onPress={() => navigation.navigate('userdetailscreen', { item })} />}
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: WIDTH * 0.05 }}
      />
    </View>
  );
};

export default UserlistScreen;