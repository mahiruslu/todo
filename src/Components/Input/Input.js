import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './Input.style'

const Input = ({placeholder,onChangeText,value}) => {
    return (
        <View style={styles.input}>
            <TextInput style={styles.text} onChangeText={onChangeText} value={value} placeholder={placeholder}/>
        </View>
    )
}

export default Input
