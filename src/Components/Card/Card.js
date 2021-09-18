import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Card.style'

const Card = ({text,onPress,textStyle}) => {
    return (
        <TouchableOpacity style={styles.text_container} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Card
