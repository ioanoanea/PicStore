import React from "react";
import {StyleSheet} from "react-native";
import PSText from "./PSText";

const PSLoader = ({text, style, show = false, loading = false, success = false}) => {

    let backgroundColor;
    if (loading) {
        backgroundColor = 'blue';
    } else if (success) {
        backgroundColor = 'green';
    } else {
        backgroundColor = 'red';
    }
    return (
        <PSText
            text={text}
            style={[
                styles.dialogMsg,
                style,
                { opacity : show ? 1 : 0, backgroundColor : backgroundColor}
            ]}
        />
    );
}

const styles = StyleSheet.create({
    dialogMsg: {
        width: '100%',
        paddingVertical: 5,
        position: 'absolute',
        textAlign: 'center',
    }
});

export default PSLoader;
