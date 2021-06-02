import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Header from 'components/items/heads/Header';
import { LoginButton } from 'components/items';
import { TouchableOpacity } from 'react-native';
import { colors } from 'constants/global';
import auth from '@react-native-firebase/auth';
const defaultImage = require('../../../assets/images/rgt_image.jpg');

const PersonalEdit = ({ navigation }) => {
	const [user, setUser] = useState();

	useEffect(() => {
		const getUser = async () => {
			await setUser(auth().currentUser);
		};
		getUser();
		console.log(user);
		// if (!user) {
		// 	navigation.navigate('Login');
		// }
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} back title='User Information' />
			<View style={styles.wrapperContent}>
				<Image
					style={styles.imagePersonal}
					source={user ? { uri: user.photoURL } : defaultImage}
				/>
				<View style={styles.contentView}>
					<View style={styles.rowView}>
						<Text style={styles.leftText}>Name</Text>
						<Text style={styles.rightText}>
							{user ? user.displayName : 'Your name'}
						</Text>
					</View>
					<View style={styles.rowView}>
						<Text style={styles.leftText}>Date</Text>
						<Text style={styles.rightText}>01/01/1999</Text>
					</View>
					<View style={styles.rowView}>
						<Text style={styles.leftText}>Email</Text>
						<Text style={styles.rightText}>
							{user ? user.email : 'email@ex.com'}
						</Text>
					</View>
					<View style={styles.rowView}>
						<Text style={styles.leftText}>Phone</Text>
						<Text style={styles.rightText}>
							{user
								? user.phoneNumber
									? user.phoneNumber
									: '---- --- ---'
								: '---- --- ---'}
						</Text>
					</View>
					<View style={styles.rowView}>
						<Text style={styles.leftText}>Provider</Text>
						<Text style={styles.rightText}>
							{user ? user.providerData[0].providerId : ''}
						</Text>
					</View>
					<TouchableOpacity
						disabled
						style={[styles.btn, { backgroundColor: '#9DADA5' }]}
						onPress={() => navigation.navigate('PersonalSave')}>
						<Text style={styles.textBtn}>Edit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default PersonalEdit;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapperContent: {
		flex: 1,
		paddingTop: 75,
	},
	imagePersonal: {
		width: 150,
		height: 150,
		borderRadius: 75,
		alignSelf: 'center',
		marginBottom: 5,
	},
	contentView: {
		flex: 1,
	},
	rowView: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 42,
		height: 42,
		marginVertical: 2,
		backgroundColor: colors.WHITE,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: -6, height: 2 },
		shadowOpacity: 0.26,
		elevation: 2,
		flexDirection: 'row',
		marginHorizontal: 7,
		borderRadius: 4,
	},
	leftText: {
		flex: 1,
		fontSize: 18,
		paddingStart: '10%',
	},
	rightText: {
		flex: 2,
		justifyContent: 'center',
		fontSize: 18,
		fontWeight: '700',
	},
	btn: {
		maxWidth: 145,
		maxHeight: 41,
		width: 145,
		height: 41,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: '#2DADA5',
		borderRadius: 21,
		marginTop: 5,
	},
	textBtn: {
		fontSize: 18,
		color: colors.WHITE,
		fontWeight: '700',
	},
});
