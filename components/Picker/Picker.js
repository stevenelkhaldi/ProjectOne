import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import styles from './Picker.styles'

const Picker = ({onChangeValue, placeHolder}) => {
    return (
        <View style={styles.myContainer}>
            <RNPickerSelect style={styles.myPicker}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Basketball', value: 'basketball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
                onValueChange={onChangeValue}
                placeholder={placeHolder}
                />
        </View>
    )
}

export default Picker; 