import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import PSText from "./PSText";
import PSColors from "../../../assets/colors/PSColors";
import PSFonts from "../../../assets/fonts/PSFonts";

const PSSolidButton = ({style, onPress, text = "Button", backgroundColor = PSColors.RED}) => {
    return (
        <TouchableOpacity style={[styles.button, style, {backgroundColor: backgroundColor}]} onPress={onPress}>
            <PSText text={text} fontFamily={PSFonts.LATO_REGULAR} color={PSColors.WHITE} fontSize={18} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PSSolidButton;
