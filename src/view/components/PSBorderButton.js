import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import PSText from "./PSText";
import PSFonts from "../../../assets/fonts/PSFonts";
import PSColors from "../../../assets/colors/PSColors";

const PSBorderButton = ({style, text = "Button"}) => {
    return (
        <TouchableOpacity style={[styles.button, style]}>
            <PSText text={text} fontFamily={PSFonts.LATO_LIGHT} color={PSColors.WHITE} fontSize={18}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: PSColors.DARK_GRAY,
        borderWidth: 0.5,
    }
});

export default PSBorderButton;
