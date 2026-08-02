import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import { AppText, Header } from "../components";
import { dotIcon, firstName, linkIcon, logoutIcon, mailicon, nextIcon, profileIcon, UserImage } from "../constants/icons";
import { RFValue } from "react-native-responsive-fontsize";
import { useMemo } from "react";
import { storage } from "../helperfunctions/AsyncStorage";
import { useSelector } from "react-redux";


const ProfileScreen = ({ navigation }) => {
  const profileData = useSelector((state) => state?.acme?.profile);
  console.log('profile==>',profileData);
  
  const dataremember = storage.get('remember')
  const handleLogout =async () => {
    if (dataremember) {
      await storage.remove('token')
    }
    else {
      await storage.clear()
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "loginscreen" }],
    });
  }

  return (
    <View style={{ backgroundColor: colors.primarylight2, flex: 1 }}>
      <Header leftIcon={nextIcon} rightIcon={dotIcon} leftIconStyle={{ transform: [{ rotateY: '180deg' }] }} rightIconStyle={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} />
      <View style={{ width: WIDTH * 1.8, height: WIDTH * 1.8, position: 'absolute', borderRadius: 350, backgroundColor: colors.white, top: HEIGHT * 0.25, left: -WIDTH * 0.4 }} />
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.1 }}>
        <View style={{ width: WIDTH * 0.33, height: WIDTH * 0.33, alignItems: "center", justifyContent: "center", borderRadius: 100, borderWidth: 5, borderColor: colors.white, backgroundColor: colors.grey, marginRight: WIDTH * 0.03 }}>
          <Image source={profileData?.profileImage?{uri:profileData?.profileImage}:UserImage} style={{ width: WIDTH * 0.3, height: WIDTH * 0.3, borderRadius: 100 }} resizeMode="contain" />
        </View>
        <AppText style={{ fontSize: RFValue(20), fontWeight: '900', marginTop: HEIGHT * 0.01 }}>{profileData?.name}</AppText>
        <AppText style={{ fontSize: RFValue(14), fontWeight: '500', color: colors.primary, marginTop: HEIGHT * 0.01 }}>{profileData?.email}</AppText>
      </View>
      <View style={{ marginHorizontal: WIDTH * 0.05, paddingHorizontal: WIDTH * 0.03, borderWidth: 1, borderRadius: 10, marginTop: HEIGHT * 0.07, borderColor: colors.grey,paddingVertical:HEIGHT*0.01 }}>
        <View style={{ flexDirection: "row",alignItems:"center" }}>
          <Image source={logoutIcon} style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, marginRight: WIDTH * 0.03 }} resizeMode="contain" tintColor={colors.darkgrey} />
          <TouchableOpacity onPress={() => handleLogout()}>
            <AppText style={{ fontSize: RFValue(16), fontWeight: '700', color: colors.black }}>Log out</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;