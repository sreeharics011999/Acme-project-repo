import { Image, Text, TouchableOpacity, View } from "react-native";
import { colors, HEIGHT, WIDTH } from "../constants/constants";
import { Appicon, AppText, Button, Forminput } from "../components";
import { RFValue } from "react-native-responsive-fontsize";
import { useEffect, useState } from "react";
import { AppleIcon, GoogleIcon, lockIcon, mailicon, MarkIcon } from "../constants/icons";
import { storage } from "../helperfunctions/AsyncStorage";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/reducers";
import Toast from "react-native-toast-message";

interface FormData {
  [key: string]: string;
}

const formJson = [
  { name: 'email', placeholder: 'Enter email', label: 'email', icon: mailicon },
  { name: 'password', placeholder: 'Enter password', label: 'password', icon: lockIcon },
]

const loginResponce = {
  "success": true,
  "message": "Login successful",
  "token": "demo_auth_token_123456789",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "admin@mail.com",
    "profileImage": "https://i.pravatar.cc/150?img=12"
  }
}


const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({})
  const [error, setError] = useState({})
  const [rememberMe, setrememberMe] = useState(false)

  const fetchToken = async () => {
    const getRemberme = await storage.get('remember')
    const getData = await storage.get('profile')
    const getPass = await storage.get('password')
    if (getRemberme) {
      setData({ email: getData?.email, password: getPass })
      setrememberMe(true)
    }
  };


  useEffect(() => {
    fetchToken()
  }, [])

  const handleLogin = () => {
    const errorData = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    formJson.forEach((item) => {
      if (data[item?.name]) {
        if (item.name === "email" && !emailRegex.test(data[item?.name].trim())) {
          errorData[item?.name] = `Enter a valid email`
        }
      }
      else {
        errorData[item?.name] = `Enter the ${item?.name}`
      }
    })
    setError(errorData)
    console.log('error-->', errorData);

    if (Object.keys(errorData).length == 0) {
      if (data?.email == 'admin@mail.com' && data?.password == 'password') {
        console.log('working');
        storage.set('token', loginResponce?.token)
        storage.set('profile', loginResponce?.user)

        dispatch((setProfile(loginResponce?.user)))
        if (rememberMe) {
          storage.set('remember', true)
          storage.set('password', data?.password)
        }
        else {
          storage.set('remember', false)
        }
        Toast.show({
          type: "success",
          text1: "Success",
          text2: loginResponce?.message,
        });
        navigation.reset({
          index: 0,
          routes: [{ name: "dashboard" }],
        });
      }
      else {
        console.log('not working');
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Invalid email or password",
        });
      }
    }
  }

  return (
    <View style={{ backgroundColor: colors.white, flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: HEIGHT * 0.1 }}>
        <Appicon style={{ width: WIDTH * 0.15, height: WIDTH * 0.15 }} textStyle={{ fontSize: RFValue(30) }} />
        <AppText style={{ fontSize: RFValue(20), fontWeight: '900', marginTop: HEIGHT * 0.01 }}>Acme Dashboard</AppText>
        <AppText style={{ fontSize: RFValue(14), fontWeight: '500', color: colors.black, opacity: 0.5, width: WIDTH * 0.6, textAlign: "center", marginTop: HEIGHT * 0.01 }}>Welcome Back! please login to continue</AppText>
      </View>
      <View style={{ paddingHorizontal: WIDTH * 0.075, marginTop: HEIGHT * 0.05 }}>
        {formJson.map((item, index) => (
          <Forminput
            key={index.toString()}
            item={item}
            data={data}
            setData={setData}
            error={error}
            setError={setError}
          />
        ))}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: WIDTH * 0.07 }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }} onPress={() => setrememberMe(!rememberMe)}>
          <View style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, backgroundColor: rememberMe ? colors.primary : colors.white, alignItems: "center", justifyContent: "center", borderRadius: 5, marginRight: WIDTH * 0.02, borderWidth: 1, borderColor: colors.grey }}>
            <Image style={{ width: WIDTH * 0.03, height: WIDTH * 0.03, }} resizeMode="contain" tintColor={colors.white} source={MarkIcon} />
          </View>
          <AppText style={{ fontSize: RFValue(12), }}>Remember me</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <AppText style={{ fontSize: RFValue(12), color: colors.primary }}>forgot password?</AppText>
        </TouchableOpacity>
      </View>
      <Button title='login' style={{ width: WIDTH * 0.85, alignSelf: "center", paddingVertical: HEIGHT * 0.02, marginTop: HEIGHT * 0.04 }} onPress={() => handleLogin()} />
      <View style={{ paddingHorizontal: WIDTH * 0.075, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", gap: WIDTH * 0.02, marginTop: HEIGHT * 0.02 }}>
        <View style={{ height: HEIGHT * 0.001, backgroundColor: colors.grey, width: WIDTH * 0.25 }} />
        <AppText style={{ fontSize: RFValue(12), color: colors.grey }}>or continue with</AppText>
        <View style={{ height: HEIGHT * 0.001, backgroundColor: colors.grey, width: WIDTH * 0.25 }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: WIDTH * 0.03, paddingHorizontal: WIDTH * 0.075, marginTop: HEIGHT * 0.03 }}>
        <Button title="Google" icon={GoogleIcon} style={{ backgroundColor: colors.white, borderWidth: 1, borderColor: colors.grey, flexDirection: "row", alignItems: "center", paddingVertical: HEIGHT * 0.015, width: WIDTH * 0.413 }} textStyle={{ color: colors.black, fontSize: RFValue(13) }} />
        <Button title="Apple" icon={AppleIcon} style={{ backgroundColor: colors.white, borderWidth: 1, borderColor: colors.grey, flexDirection: "row", alignItems: "center", paddingVertical: HEIGHT * 0.015, width: WIDTH * 0.41 }} textStyle={{ color: colors.black, fontSize: RFValue(13) }} />
      </View>
      <View style={{ paddingHorizontal: WIDTH * 0.075, flexDirection: "row", marginTop: HEIGHT * 0.02, alignItems: "center", justifyContent: "center" }}>
        <AppText style={{ fontSize: RFValue(12), color: colors.black, marginRight: WIDTH * 0.02 }}>Don't have an account?</AppText>
        <TouchableOpacity>
          <AppText style={{ fontSize: RFValue(12), color: colors.primary }}>Sign up</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;