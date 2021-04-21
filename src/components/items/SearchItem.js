import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { colors } from '../../constants/global';
const defaultImage = require('../../../assets/images/rgt_image.jpg');

const SearchItem = ({
	style,
	image,
	object = { title: '', address: '', content: '' },
	titleStyle,
	addressStyle,
	contentStyle,
	onPress,
}) => {
	const renderTextContent = text => {
		return text.substring(0, text.length > 70 ? 70 : text.length) + '...';
	};
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<View style={styles.imageView}>
				<Image
					style={styles.image}
					source={image ? image : defaultImage}
				/>
			</View>
			<View style={styles.textView}>
				<Text style={[styles.title, titleStyle]}>
					{object.title ? object.title : 'Ten dia danh'}
				</Text>
				<Text style={[styles.address, addressStyle]}>
					{object.address ? object.address : 'Dia chi'}
				</Text>
				<Text style={[styles.content, contentStyle]}>
					{object.content
						? renderTextContent(object.content)
						: 'Noi dung rut gon cua dia danh'}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default SearchItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minHeight: 90,
		maxHeight: 90,
		height: 90,
		marginHorizontal: 10,
		paddingHorizontal: 8,
		paddingVertical: 7,
		borderRadius: 3,
		backgroundColor: colors.WHITE,
		shadowColor: '#000',
		shadowOffset: { width: -6, height: 2 },
		shadowOpacity: 0.2,
		marginBottom: 10,
		elevation: 2,
		flexDirection: 'row',
	},
	imageView: {
		flex: 1,
		flexDirection: 'row',
		minWidth: 100,
		maxWidth: 100,
		maxHeight: 74,
		minHeight: 74,
		width: 100,
		height: 74,
		borderWidth: 1,
		borderColor: '#efefef',
		borderRadius: 2,
	},
	image: {
		width: 98,
		height: 72,
	},
	textView: {
		paddingStart: 7,
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		textAlignVertical: 'center',
		color: colors.GRAY,
	},
	address: {
		fontSize: 14,
		fontWeight: '600',
		textAlignVertical: 'center',
		color: colors.GRAY,
	},
	content: {
		fontSize: 12,
		fontWeight: '500',
		textAlignVertical: 'center',
		color: colors.LIGHTGRAY,
	},
});
