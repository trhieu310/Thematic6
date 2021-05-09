import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import { colors } from '../../constants/global';

const LinkButton = ({ text = 'Link Button', onPress, style, textStyle }) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<Text style={[styles.text, textStyle]}>{text}</Text>
		</TouchableOpacity>
	);
};

export default LinkButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxWidth: 290,
		maxHeight: 32,
		minHeight: 32,
		minWidth: 290,
		width: 290,
		height: 32,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.WHITE,
	},
});
