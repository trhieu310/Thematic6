import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const IconIo = ({name = "", size = {}, color = ""}) => {
    return (
        <Icon name={name} size={size} color={color} />
    )
}

export default IconIo

const styles = StyleSheet.create({})
