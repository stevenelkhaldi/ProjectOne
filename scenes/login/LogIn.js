import React, { useState} from 'react';
import { View, Text } from 'react-native';

import Input from "../../components/Input/Input";
import MyButton from "../../components/Button/Button"
import CustomButton from "../../components/CustomButton/CustomButton"
import Picker from "../../components/Picker/Picker"

import styles from './Login.styles';

const LogIn = () => {
    //binding
    const [ firstName, setFirstName ] = useState();
    const [ lastName, setLastName] = useState();
    const [ email, setEmail ] = useState();
    const [ phoneNumber, setPhoneNumber ] = useState();
    const [ currentPickerValue, setPickerValue ] = useState("hello");

    const resetState = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={{flex: 1, height: 50, backgroundColor: 'blue'}}/>
                <View style={{flex: 2, height: 50, backgroundColor: 'red'}}/>
                <View style={{flex: 3, height: 50, backgroundColor: 'green'}}/>
            </View>
            <View>
               <Input
                placeHolder="Enter first name"
                value={firstName}
                setInput={v => setFirstName(v)}
               />
                <Input
                placeHolder="Enter last name"
                value={lastName}
                setInput={v => setLastName(v)}
               />
               <Input
                placeHolder="Enter email address"
                value={email}
                setInput={v => setEmail(v)}
                keyboardType="email-address"
               />
               <Input
                // placeHolder="Enter phone number"
                value={phoneNumber}
                setInput={v => setPhoneNumber(v)}
                keyboardType="number-pad"
               />
            </View>
            
            <Text>{firstName}</Text>
            <Text>{lastName}</Text>
            <Text>{email}</Text>
            <Text>{phoneNumber}</Text>

            <MyButton
            text={'press me'}
            press={() => resetState()}
            />
            <CustomButton
                text="Press me"
                pressMe={() => resetState()} />
            <Text>{currentPickerValue}</Text>
            <Picker onChangeValue={(value) => setPickerValue(value)}
                placeHolder={{label: "Pick a sport", value: null}}
                />
        </View>
    )
}

export default LogIn;