import { Text, View } from "react-native";
import { Appicon } from "../components";
import { useEffect } from "react";
import { storage } from "../helperfunctions/AsyncStorage";
import { useDispatch } from "react-redux";
import { setProfile } from "../redux/reducers";

const Splashscreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const fetchToken = async () => {
    const token = await storage.get("token");
    if (token) {
      const getData = await storage.get('profile')
      if (getData) {
        dispatch((setProfile(getData)))
        navigation.reset({
          index: 0,
          routes: [{ name: "dashboard" }],
        });
      }
    }
    else {
      navigation.reset({
        index: 0,
        routes: [{ name: "loginscreen" }],
      });
    }
  };

  useEffect(() => {
    fetchToken()
  }, [])
  return (
    <View style={{ alignItems: 'center', justifyContent: "center", flex: 1 }}>
      <Appicon />
    </View>

  );
};

export default Splashscreen;