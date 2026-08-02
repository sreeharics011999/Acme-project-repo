import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import { AppText, Header } from "../components";
import { dotIcon, firstName, linkIcon, mailicon, nextIcon, profileIcon, UserImage } from "../constants/icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useMemo } from "react";

const item = {
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com"
}

const UserdetailScreen = ({navigation,route}) => {
  const data=route?.params?.item
  console.log('data--->',data);
  
  const profileJson = useMemo(() => [
    { label: "First name", icon: firstName, data: data?.firstName },
    { label: "Last name", icon: profileIcon, data: data?.lastName },
    { label: "Email", icon: mailicon, data: data?.email },
    { label: "Support Url", icon: linkIcon, data: 'https://picsum.photos/400/40' },
  ], [item])

  const openURL = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.log("Failed to open URL:", error);
    }
  };

  return (
    <View style={{ backgroundColor: colors.primarylight2, flex: 1 }}>
      <Header leftIcon={nextIcon} rightIcon={dotIcon} leftIconStyle={{ transform: [{ rotateY: '180deg' }] }} rightIconStyle={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} />
      <View style={{ width: WIDTH * 1.8, height: WIDTH * 1.8, position: 'absolute', borderRadius: 350, backgroundColor: colors.white, top: HEIGHT * 0.25, left: -WIDTH * 0.4 }} />
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.1 }}>
        <View style={{ width: WIDTH * 0.33, height: WIDTH * 0.33, alignItems: "center", justifyContent: "center", borderRadius: 100, borderWidth: 5, borderColor: colors.white, backgroundColor: colors.grey, marginRight: WIDTH * 0.03 }}>
          <Image source={UserImage} style={{ width: WIDTH * 0.3, height: WIDTH * 0.3, borderRadius: 100 }} resizeMode="contain" />
        </View>
        <AppText style={{ fontSize: RFValue(20), fontWeight: '900', marginTop: HEIGHT * 0.01 }}>{data?.firstName} {data?.lastName}</AppText>
        <AppText style={{ fontSize: RFValue(14), fontWeight: '500', color: colors.primary, marginTop: HEIGHT * 0.01 }}>{data?.email}</AppText>
      </View>
      <View style={{ marginHorizontal: WIDTH * 0.05, paddingHorizontal: WIDTH * 0.03, borderWidth: 1, borderRadius: 10, marginTop: HEIGHT * 0.07, borderColor: colors.grey }}>
        <AppText style={{ fontSize: RFValue(14), fontWeight: '900', marginTop: HEIGHT * 0.01, marginBottom: HEIGHT * 0.02 }}>User Information</AppText>
        {profileJson?.map((data) =>
          <View style={{ flexDirection: "row", marginBottom: HEIGHT * 0.03 }}>
            <Image source={data?.icon} style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, marginRight: WIDTH * 0.03 }} resizeMode="contain" tintColor={colors.darkgrey} />
            <View>
              <AppText style={{ fontSize: RFValue(12), fontWeight: '500', color: colors.darkgrey }}>{data?.label}</AppText>
              {data?.label == "Support Url" ?
                <TouchableOpacity onPress={() => openURL(data?.data)}>
                  <AppText style={{ fontSize: RFValue(14), fontWeight: '500', color: colors.primary }}>{data?.data}</AppText>
                </TouchableOpacity> :
                <AppText style={{ fontSize: data?.label == "Email" ? RFValue(14) : RFValue(16), fontWeight: '700', }}>{data?.data}</AppText>
              }
            </View>
          </View>)}
      </View>
    </View>
  );
};

export default UserdetailScreen;