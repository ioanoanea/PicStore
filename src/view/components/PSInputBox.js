import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import PSColors from "../../../assets/colors/PSColors";
import PSIcon from "./PSIcon";

const PSInputBox = ({style, iconName, placeholder, onChangeText, secureText = false}) => {
    return (
        <View style={[styles.box, style]}>
            <PSIcon name={iconName} size={16} color={PSColors.GRAY}/>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={PSColors.GRAY}
                secureTextEntry={secureText}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    box : {
        width: 100,
        paddingHorizontal: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: PSColors.DARK_GRAY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input : {
        width: '90%',
        fontSize: 18,
        paddingVertical: 8,
        color: PSColors.WHITE,
    }
});

export default PSInputBox;
