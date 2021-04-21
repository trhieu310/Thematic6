import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../constants/global';

const SocialButton = ({
	name = 'google',
	size = 24,
	type = 'font-awesome-5',
	color = '#ffffff',
	style,
	text = 'Social Button',
	textStyle,
	onPress,
}) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<View style={styles.iconView}>
				<Icon
					style={styles.icon}
					name={name}
					size={size}
					type={type}
					color={color}
				/>
			</View>
			<View style={styles.textView}>
				<Text style={[styles.text, textStyle]}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default SocialButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 60,
		maxWidth: 290,
		minHeight: 60,
		minWidth: 290,
		height: 60,
		width: 290,
		borderRadius: 15,
		backgroundColor: colors.GOOGLE,
	},
	iconView: {
		flex: 2,
		justifyContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
	},
	textView: {
		flex: 6,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	text: {
		color: colors.WHITE,
		fontSize: 18,
		fontWeight: 'bold',
	},
});
