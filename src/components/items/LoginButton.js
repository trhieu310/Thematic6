import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/global';

const LoginButton = ({ title = 'Login', onPress, style }) => {
	return (
		<TouchableOpacity style={[style, styles.container]} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default LoginButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		maxHeight: 55,
		maxWidth: 290,
		minHeight: 55,
		minWidth: 290,
		width: 290,
		height: 55,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: colors.WHITE,
		backgroundColor: 'rgba(255, 255, 255, .2)',
	},
	text: {
		fontSize: 18,
		color: '#111111',
		fontWeight: 'bold',
	},
});
