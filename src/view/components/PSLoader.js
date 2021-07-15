import React from "react";
import {StyleSheet} from "react-native";
import PSText from "./PSText";

class PSLoader extends React.Component {
    constructor(props) {
        super(props);
        if (props.loading) {
            this.backgroundColor = 'blue';
        } else if (this.props.success) {
            this.backgroundColor = 'green';
        } else {
            this.backgroundColor = 'red';
        }
    }

    render() {
        return (
            <PSText
                text={this.props.text}
                style={[
                    styles.dialogMsg,
                    this.props.style,
                    {backgroundColor: this.backgroundColor, opacity : this.props.show}
                ]}
            />
        );
    }
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
