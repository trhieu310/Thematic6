import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconFa = ({ name = '', size = {}, color = '' }) => {
	return <Icon name={name} size={size} color={color} />;
};

export default IconFa;

const styles = StyleSheet.create({});
