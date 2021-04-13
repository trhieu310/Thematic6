import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

const IconFa5 = ({name = "", size = {}, color = "", solid = false, light = false }) => {
    console.log(name, size, color)
    return (
        <Icon solid={solid} light={light} name={name} size={size} color={color} />
    )
}

export default IconFa5

const styles = StyleSheet.create({})
