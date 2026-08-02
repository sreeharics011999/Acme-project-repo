import { Modal, Pressable, View } from "react-native"
import { colors, HEIGHT, WIDTH } from "../constants/constants"
import AppText from "./Apptext"
import { RFValue } from "react-native-responsive-fontsize"
import Button from "./Button"

interface Props{
    visible:boolean,
    title:string,
    btntext2:string,
    setVisible?:any,
    pressConfirm?:()=>void
}

const AlertModal:React.FC<Props> = ({visible,title,btntext2,setVisible,pressConfirm}) => {

    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
        >
            <Pressable style={{ flex: 1, backgroundColor: colors.transparent, alignItems: "center", justifyContent: "center" }}>
                <Pressable style={{ width: WIDTH * 0.85, height: HEIGHT * 0.25, backgroundColor: colors.white, borderRadius: 20, paddingVertical: HEIGHT * 0.05 }}>
                    <AppText style={{ fontSize: RFValue(16), fontWeight: '500', marginTop: HEIGHT * 0.01, textAlign: "center" }}>{title}</AppText>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: WIDTH * 0.03, paddingHorizontal: WIDTH * 0.075, marginTop: HEIGHT * 0.03 }}>
                        <Button title="Cancel" style={{ backgroundColor: colors.white, borderWidth: 1, borderColor: colors.grey, flexDirection: "row", alignItems: "center", paddingVertical: HEIGHT * 0.015, width: WIDTH * 0.313 }} textStyle={{ color: colors.black, fontSize: RFValue(13) }} onPress={()=>setVisible(false)}/>
                        <Button title={btntext2} style={{ backgroundColor: colors.error, borderWidth: 1, borderColor: colors.grey, flexDirection: "row", alignItems: "center", paddingVertical: HEIGHT * 0.015, width: WIDTH * 0.31 }} textStyle={{ color: colors.white, fontSize: RFValue(13) }} onPress={pressConfirm} />
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}
export default AlertModal