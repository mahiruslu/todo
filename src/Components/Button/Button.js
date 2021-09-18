import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Button.style'

const Button = ({btnName,onPress}) => {
    return (
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                <Text style={styles.text}>{btnName}</Text>
            </TouchableOpacity>
    )
}

export default Button
