import React from "react";
import {StyleSheet, View} from "react-native";
import PSColors from "../../../assets/colors/PSColors";
import PSText from "../components/PSText";
import PSFonts from "../../../assets/fonts/PSFonts";
import PSInputBox from "../components/PSInputBox";
import PSSolidButton from "../components/PSSolidButton";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signUp} from "../actions/users/usersActionManager";
import PSLoader from "../components/PSLoader";

class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            email : "",
            password : "",
            confirmPassword : "",
        }
    }

    signUp() {
        if (this.state.password === this.state.confirmPassword) {
            this.props.signUp(this.state.username, this.state.email, this.state.password);
        } else {
            alert("Passwords don't match!");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <PSText
                    style={styles.textSignUP}
                    text="Sign Up" fontSize={24}
                    fontFamily={PSFonts.LATO_LIGHT}
                />
                <PSInputBox
                    style={styles.inputBox}
                    iconName="user-white"
                    placeholder="Username"
                    onChangeText={(value) => {this.setState({username : value});}}
                />
                <PSInputBox
                    style={styles.inputBox}
                    iconName="email"
                    placeholder="Email"
                    onChangeText={(value) => {this.setState({email : value});}}
                />
                <PSInputBox
                    style={styles.inputBox}
                    iconName="lock"
                    placeholder="Password"
                    secureText={true}
                    onChangeText={(value) => {this.setState({password : value});}}
                />
                <PSInputBox
                    style={styles.inputBox}
                    iconName="lock"
                    placeholder="Confirm Password"
                    secureText={true}
                    onChangeText={(value) => {this.setState({confirmPassword : value});}}
                />
                <PSSolidButton
                    style={styles.button}
                    text="Sign Up"
                    onPress={() => this.signUp()}
                />
                <PSLoader
                    text={
                        this.props.success ? "Successful registered!" :
                            this.props.loading ? "Registering user!" :
                                this.props.msg ? this.props.msg : ""
                    }
                    style={{bottom : 0}}
                    success={this.props.success}
                    loading={this.props.loading}
                    //show={this.props.showMsg}
                />
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

const mapStateToProps = (appStore) => ({
    loading : appStore.users.loading,
    //showMsg : appStore.user.showMsg,
    msg : appStore.users.msg,
});

const mapDispatchProps = (dispatch) => bindActionCreators({signUp}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(SignUpScreen);
