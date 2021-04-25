import { ButtonSetting } from 'components/items';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../items/heads/Header';
import auth from '@react-native-firebase/auth';

const Personal = ({ navigation }) => {
	const logOut = () => {
		auth()
			.signOut()
			.then(() => navigation.navigate('Home'));
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} back title='Profile' />
			<View style={styles.wrapperContent}>
				<ButtonSetting
					style={styles.button}
					text='Personal Information'
				/>
				<ButtonSetting
					style={styles.button}
					text='Language'
					backgroundColor='#F2AE63'
				/>
				<ButtonSetting
					style={styles.button}
					text='Terms of use'
					backgroundColor='#2E7A7E'
				/>
				<ButtonSetting
					style={styles.button}
					text='Log out'
					backgroundColor='#F66060'
					onPress={() => logOut()}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Personal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapperContent: {
		flex: 1,
		paddingTop: 70,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	button: {
		marginVertical: 7,
	},
});
