import { Dimensions, useWindowDimensions } from "react-native"

export const colors = {
    primary: '#8955FF',
    primarylight: '#f4f1fc',
    primarylight2: 'rgb(227, 217, 255)',
    white: '#ffffff',
    black: '#000000',
    grey: "#CFCECE",
    darkgrey: "#757575",
    error:'rgb(255, 0, 0)',
    green:"#37be01",
    greenLight:"#f0faec",
    yellow:"#ffe601",
    yellowLight:"rgb(250, 249, 236)",
    blue:"#009efa",
    blueLight:"#ecf7fa",
}

export const WIDTH = Dimensions.get("window").width
export const HEIGHT = Dimensions.get("window").height