import React from "react";
import {Text} from "react-native";
import {Lato_100Thin, Lato_300Light, Lato_400Regular, Lato_700Bold, Lato_900Black, useFonts} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import PSFonts from "../../../assets/fonts/PSFonts";
import PSColors from "../../../assets/colors/PSColors";

function PSText({text, style, fontFamily = PSFonts.LATO_REGULAR, fontSize = 16, color = PSColors.LIGHT_GRAY}) {
    // load fonts
    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_300Light,
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black,
    });
    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    return <Text style={[{fontFamily : fontFamily, fontSize: fontSize, color: color}, style]}>{text}</Text>;
}

export default PSText;
