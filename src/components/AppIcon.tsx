import { Text, TextStyle, View, ViewProps, ViewStyle } from "react-native"
import AppText from "./Apptext"
import { colors,WIDTH } from "../constants/constants"
import { RFValue } from "react-native-responsive-fontsize"
import React from "react"

interface Props{
    style?:ViewStyle,
    textStyle?:TextStyle
}

const Appicon:React.FC<Props> = ({style,textStyle}) => {
    return (
        <View style={[{ backgroundColor: colors.primary, width: WIDTH * 0.25, height: WIDTH * 0.25,alignItems:"center",justifyContent:"center",borderRadius:20 },style]}>
            <AppText style={[{ color: colors.white,fontWeight:'900',fontSize:RFValue(60) },textStyle]}>A</AppText>
        </View>
    )
}
export default Appicon