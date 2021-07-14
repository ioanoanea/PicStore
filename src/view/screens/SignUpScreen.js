import React from "react";
import {StyleSheet, View} from "react-native";
import PSColors from "../../../assets/colors/PSColors";
import PSText from "../components/PSText";
import PSFonts from "../../../assets/fonts/PSFonts";
import PSInputBox from "../components/PSInputBox";
import PSSolidButton from "../components/PSSolidButton";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    signUp = () => {
    }

    render = () => {
        return (
            <View style={styles.container}>
                <PSText style={styles.textSignUP} text="Sign Up" fontSize={24} fontFamily={PSFonts.LATO_LIGHT}/>
                <PSInputBox style={styles.inputBox} iconName="user-white" placeholder="Username"/>
                <PSInputBox style={styles.inputBox} iconName="email" placeholder="Email"/>
                <PSInputBox style={styles.inputBox} iconName="lock" placeholder="Password" secureText={true}/>
                <PSInputBox style={styles.inputBox} iconName="lock" placeholder="Confirm Password" secureText={true}/>
                <PSSolidButton style={styles.button} text="Sign Up" onPress={this.onSignUp}/>
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
    textSignUP: {
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
        marginTop: 15,
        marginBottom: 15,
    },
});
