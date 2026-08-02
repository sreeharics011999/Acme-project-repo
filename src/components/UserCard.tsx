import { Image, TouchableOpacity, View } from "react-native"
import { colors, HEIGHT, WIDTH } from "../constants/constants"
import { nextIcon, UserImage } from "../constants/icons"
import AppText from "./Apptext"
import { RFValue } from "react-native-responsive-fontsize"

interface userprops {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

interface props {
    item: userprops,
    onPress:(item: userprops)=>void
}

const UserCard: React.FC<props> = ({ item,onPress }) => {
    return (
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between",paddingVertical:HEIGHT*0.015,borderBottomWidth:0.5,borderColor:colors.grey }} onPress={() => onPress(item)}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <View style={{ width: WIDTH * 0.12, height: WIDTH * 0.12, alignItems: "center", justifyContent: "center",borderRadius:100,borderWidth:0.5,borderColor:colors.grey,backgroundColor:colors.grey,marginRight:WIDTH*0.03 }}>
                    <Image source={UserImage} style={{ width: WIDTH * 0.12, height: WIDTH * 0.12,borderRadius:100 }} resizeMode="contain" />
                </View>
                <View>
                    <AppText style={{ fontSize: RFValue(14), fontWeight: '700' }}>{item?.firstName} {item?.lastName}</AppText>
                    <AppText style={{ fontSize: RFValue(10), fontWeight: '500',color:colors.darkgrey }}>{item?.email}</AppText>
                </View>
            </View>
            <Image source={nextIcon} style={{ width: WIDTH * 0.04, height: WIDTH * 0.04 }} resizeMode="contain" tintColor={colors.darkgrey} />
        </TouchableOpacity>
    )
}
export default UserCard