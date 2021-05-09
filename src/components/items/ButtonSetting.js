import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../constants/global';

const ButtonSetting = ({
	style,
	onPress,
	textStyle,
	icon,
	text = 'text setting',
	backgroundColor = '#81BDF2',
}) => {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				style,
				{ backgroundColor: backgroundColor },
			]}
			onPress={onPress}>
			<Text style={[styles.text, textStyle]}>{text}</Text>
			<View style={styles.iconView}>
				<Icon
					style={styles.icon}
					name='chevron-right'
					size={24}
					type='font-awesome-5'
					color={colors.WHITE}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default ButtonSetting;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		minHeight: 80,
		maxHeight: 80,
		minWidth: 300,
		maxWidth: 340,
		width: 340,
		height: 80,
		backgroundColor: 'rgba(129, 189, 242, .8)',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#999',
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.8,
		elevation: 2,
		flexDirection: 'row',
	},
	text: {
		flex: 5,
		paddingLeft: 45,
		fontSize: 18,
		color: colors.WHITE,
	},
	iconView: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
