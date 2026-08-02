import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AppText, Header, SearchBar, UserCard } from "../components";
import { customersIcon, dollarIcon, Notification, orderIocn, shopingCart, toogle, UserImage } from "../constants/icons";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import { RFValue } from "react-native-responsive-fontsize";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

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
  }
]

const responceJson = {
  "stats": [
    {
      "id": 1,
      "title": "Total Sales",
      "value": "245000",
      "upgrade":'12.5'
    },
    {
      "id": 2,
      "title": "Revenue",
      "value": "185000",
      "upgrade":'8.2'
    },
    {
      "id": 3,
      "title": "Orders",
      "value": "1245",
      "upgrade":'15.3'
    },
    {
      "id": 4,
      "title": "Customers",
      "value": "856",
      "upgrade":'10.1'
    }
  ]
}




const DashboardScreen = ({ navigation }) => {
  const profileData = useSelector((state) => state?.acme?.profile);
  const [search,setSearch]=useState('')
  const fetchData = () => {
    const fetchedData:any[]= [];
    responceJson?.stats?.forEach((item) => {
      switch (item?.title) {
        case "Total Sales":
          fetchedData.push({ ...item, icon: shopingCart, iconBg: colors.primary, cardbg: colors.primarylight });
          break;
        case "Revenue":
          fetchedData.push({ ...item, icon: dollarIcon, iconBg: colors.green, cardbg: colors.greenLight });
          break;
        case "Orders":
          fetchedData.push({ ...item, icon: orderIocn, iconBg: colors.yellow, cardbg: colors.yellowLight });
          break;
        case "Customers":
          fetchedData.push({ ...item, icon: customersIcon, iconBg: colors.blue, cardbg: colors.blueLight });
          break;
        default:
          fetchedData.push(item);
          break;
      }
    });
    return fetchedData;
  };

  useEffect(() => {
    fetchData()
  }, [responceJson])

  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <Header leftIcon={toogle} rightIcon={Notification} rightIcon2={profileData?.profileImage} home />
      <ScrollView>
        <View style={{ marginTop: HEIGHT * 0.05, paddingHorizontal: WIDTH * 0.05 }}>
          <AppText style={{ fontSize: RFValue(14), fontWeight: '500', color: colors.black }}>Hello,</AppText>
          <AppText style={{ fontSize: RFValue(20), fontWeight: '900', marginTop: HEIGHT * 0.005 }}>{profileData?.name} 👋</AppText>
          <SearchBar style={{ marginTop: HEIGHT * 0.03 }} onchangeText={(text)=>setSearch(text)}/>
        </View>
        <View style={{ paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.02, flexWrap: 'wrap', flexDirection: "row", gap: WIDTH * 0.05 }}>
          {fetchData()?.map((item, index) =>
            <TouchableOpacity style={{ borderWidth: 0.5, backgroundColor: item?.cardbg, padding: WIDTH * 0.03, borderRadius: 10, borderColor: colors.grey, width: WIDTH * 0.425 }} key={index?.toString()}>
              <View style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: item?.iconBg, padding: WIDTH * 0.04 }}>
                <Image style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, }} resizeMode="contain" tintColor={colors.white} source={shopingCart} />
              </View>
              <AppText style={{ fontSize: RFValue(12), fontWeight: '700', color: colors.black, marginTop: HEIGHT * 0.015 }}>{item?.title}</AppText>
              <AppText style={{ fontSize: RFValue(20), fontWeight: '900', color: colors.black, }}>${item?.value}</AppText>
              {item?.upgrade?<AppText style={{ fontSize: RFValue(10), fontWeight: '500', color: colors.darkgrey, marginTop: HEIGHT * 0.01 }}><AppText style={{ fontSize: RFValue(10), fontWeight: '500', color: colors.green }}>+{item?.upgrade}%</AppText> from last month</AppText>:null}
            </TouchableOpacity>)}
        </View>
        <View style={{ paddingHorizontal: WIDTH * 0.05 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <AppText style={{ fontSize: RFValue(16), fontWeight: '800', color: colors.black }}>Recent users</AppText>
            <TouchableOpacity onPress={() => navigation.navigate('users')}>
              <AppText style={{ fontSize: RFValue(12), fontWeight: '500', color: colors.primary }}>View All</AppText>
            </TouchableOpacity>
          </View>
          <FlatList
            data={userJson}
            keyExtractor={(item) => item?.id.toString()}
            renderItem={({ item }) => <UserCard item={item} onPress={() => navigation.navigate('userdetailscreen', { item })} />}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;





