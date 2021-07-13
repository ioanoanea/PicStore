import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import PSText from "../components/PSText";
import PSColors from "../../../assets/colors/PSColors";
import PSFonts from "../../../assets/fonts/PSFonts";
import PSInputBox from "../components/PSInputBox";
import PSSolidButton from "../components/PSSolidButton";
import PSBorderButton from "../components/PSBorderButton";

export default class LogInScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <View style={styles.container}>
                <PSText style={styles.textLogIn} text="Log In" fontSize={24} fontFamily={PSFonts.LATO_LIGHT}/>
                <PSInputBox style={styles.inputBox} iconName="user-white" placeholder="Username"/>
                <PSInputBox style={styles.inputBox} iconName="lock" placeholder="password" secureText={true}/>
                <PSSolidButton style={styles.button} text="Log In"/>
                <TouchableOpacity style={styles.forgotPassword}>
                    <PSText text="Forgot your Password?" fontSize={16} fontFamily={PSFonts.LATO_LIGHT}/>
                </TouchableOpacity>
                <PSBorderButton style={styles.borderButton} text="Connect with Facebook"/>
                <PSBorderButton style={styles.borderButton} text="Connect with Google"/>
                <PSText style={styles.textCreateAccount} text="Don't have an account?" fontSize={18} fontFamily={PSFonts.LATO_LIGHT}/>
                <TouchableOpacity style={styles.signUp}>
                    <PSText text='Sign Up' color={PSColors.RED} fontSize={24}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PSColors.DARK,
        justifyContent: 'center',
    },
    textLogIn: {
        marginTop: 120,
        marginBottom: 20,
        marginHorizontal: '10%',
    },
    inputBox: {
        marginBottom: 15,
        width: '80%',
        marginHorizontal: '10%',
    },
    button: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 10,
        marginBottom: 15,
    },
    forgotPassword: {
        padding: 5,
        marginHorizontal: '10%',
        alignSelf: 'flex-end',
        marginBottom: 15,
    },
    borderButton: {
        width: '80%',
        marginHorizontal: '10%',
        marginBottom: 15,
    },
    textCreateAccount: {
        marginHorizontal: '10%',
        marginTop: 15,
        marginBottom: 8,
        alignSelf: 'center',
    },
    signUp: {
        marginHorizontal: '10%',
        alignSelf: 'center',
    },
});
