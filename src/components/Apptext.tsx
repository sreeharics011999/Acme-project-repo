import React ,{ PropsWithChildren } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { colors } from "../constants/constants";

interface AppTextProps extends PropsWithChildren {
  style?: StyleProp<TextStyle>;
}

const AppText: React.FC<AppTextProps> = ({ children,style}) =><Text allowFontScaling={false} style={[{color:colors.black},style]}>{children}</Text>

export default AppText;