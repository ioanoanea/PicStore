import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import PSColors from "../../../assets/colors/PSColors";

const Icon = createIconSetFromIcoMoon(
    require('../../../assets/fonts/icomoon/selection.json'),
    'IcoMoon',
    'icomoon.ttf'
);

const PSIcon = ({style, name, color = PSColors.LIGHT_GRAY, size= 25}) => {
    // Load the icon font before using it
    const [fontsLoaded] = useFonts({ IcoMoon: require("../../../assets/fonts/icomoon/icomoon.ttf") });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Icon style={style} name={name} size={size} color={color} />
    );
};

export default PSIcon;
