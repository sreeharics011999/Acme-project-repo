import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { colors, HEIGHT, WIDTH } from "../constants/constants"
import { AppText } from "../components/index"
import { useState } from "react"
import { closedEye, openEye } from "../constants/icons"
import { RFValue } from "react-native-responsive-fontsize"

const Forminput = ({ data, setData, error, setError, item }) => {
    const [showPassword, setShowPassword] = useState(false)

    const onchangeText = (text: string) => {
        const updateData = { ...data };
        const errorData = { ...error };
        updateData[item?.name] = text;
        if (text.trim() === "") {
            errorData[item?.name] = `Enter the ${item?.name}`;
        } else {
            errorData[item?.name] = "";
        }

        setData(updateData);
        setError(errorData);
    };

    return (
        <View>
            <AppText style={{ textTransform: "capitalize", fontSize: RFValue(12) }}>{item?.label}</AppText>
            <View style={{ borderWidth: 1, borderColor: colors.grey, borderRadius: 10, marginTop: HEIGHT * 0.01, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
                <Image style={{ width: WIDTH * 0.05, height: WIDTH * 0.05, marginRight: WIDTH * 0.03 }} resizeMode="contain" tintColor={colors.grey} source={item?.icon} />
                <TextInput
                    allowFontScaling={false}
                    style={{ flex: 1, height: HEIGHT * 0.065, color: colors.black }}
                    placeholder={item?.placeholder}
                    placeholderTextColor={colors.grey}
                    secureTextEntry={item?.label == 'password' ? !showPassword : false}
                    onChangeText={onchangeText}
                    value={data[item?.name] || ''}
                />
                {item?.label == 'password' ?
                    <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
                        <Image style={{ width: WIDTH * 0.05, height: WIDTH * 0.05 }} resizeMode="contain" tintColor={colors.grey} source={showPassword ? openEye : closedEye} />
                    </TouchableOpacity> : null}
            </View>
            {error && <AppText style={{ color: colors?.error, fontSize: RFValue(10), marginTop: HEIGHT * 0.01 }}>{error[item?.name]}</AppText>}
        </View>
    )
}
export default Forminput