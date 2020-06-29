import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';


import styles from './Input.styles';


const Input = ({placeHolder, value, setInput, keyboardType}) => {
    return (
        <View style={styles.mainContainer}>
            <TextInput style={styles.container}
                placeholder={placeHolder}
                value={value}
                onChangeText={v => setInput(v)}
                keyboardType={keyboardType}
            />
    </View>
    )
}

Input.propTypes = {
    placeHolder: PropTypes.string,
    value: PropTypes.any,
    setInput: PropTypes.func.isRequired,
    keyboardType: PropTypes.string
}

Input.defaultProps = {
    keyboardType: "default",
    placeHolder: "Please input text"
}

export default Input;