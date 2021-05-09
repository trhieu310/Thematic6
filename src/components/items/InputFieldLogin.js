import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../constants/global';

const InputFieldLogin = ({
	placeholder = 'Email',
	value = '',
	onChangeText,
	name,
	size,
	type,
	color = '#666666',
	style,
	secureTextEntry = false,
}) => {
	return (
		<View style={[styles.container, style]}>
			<Icon
				style={styles.iconInput}
				name={name}
				size={size}
				type={type}
				color={color}
			/>
			<TextInput
				style={styles.textInput}
				placeholder={placeholder}
				value={value}
				secureTextEntry={secureTextEntry}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

export default InputFieldLogin;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 55,
		maxWidth: 290,
		minHeight: 55,
		minWidth: 290,
		height: 55,
		width: 290,
		borderRadius: 30,
		backgroundColor: colors.WHITE,
		alignItems: 'center',
		paddingHorizontal: 14,
	},
	iconInput: {
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textInput: {
		flex: 1,
		maxHeight: 55,
		height: 55,
		fontSize: 18,
		textAlignVertical: 'center',
		flexWrap: 'nowrap',
		paddingStart: 16,
	},
});
