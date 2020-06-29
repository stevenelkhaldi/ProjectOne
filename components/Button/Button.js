import React from 'react';
import { Button, View, Alert } from 'react-native';
import styles from './Button.styles'

const MyButton = ({text, press}) => {
    return (
        <View style={styles.myButton}>
            <Button
                  title={text}
                  onPress={press}
            />
        </View>
    )
}

export default MyButton;