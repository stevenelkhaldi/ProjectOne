import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './CustomButton.styles'

const CustomButton = (props) => {
    return (
        <View style={{
            alignItems: "center",
            width: '100%'
        }}>
            <Text>asdfasdfasdf</Text>
            <TouchableOpacity style={styles.mainContainer}
                onPress={props.pressMe}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton;