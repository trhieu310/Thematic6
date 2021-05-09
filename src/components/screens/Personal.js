import { ButtonSetting } from 'components/items';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../items/heads/Header';
import auth from '@react-native-firebase/auth';
import { LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';
import { databaseUrl } from '../../constants/global';
import { set } from 'react-native-reanimated';

const Personal = ({ navigation }) => {
	const logOut = () => {
		const user = auth().currentUser;
		if (user) {
			auth().signOut().then(() => console.log('Signed out!'));
			try {
				GoogleSignin.signOut();
				LoginManager.logOut();
				navigation.navigate('Login');
			} catch (error) {
				console.log(error);
			}
		} else {
			navigation.navigate('Login');
		}
	};

	const addData = () => {
		const user = auth().currentUser;
		if (user) {
			const refUser = databaseUrl.ROOT + databaseUrl.HISTORY + user.uid;
			database()
				.ref(refUser)
				.set([
					{
						placeId: 'ChIJh-6MUZZXSjER23hUyLywxlU',
						time: '28-04-2021 14:30:00.00',
					},
				])
				.then(() => console.log('Data set.'));
			// database()
			// 	.ref(refUser)
			// 	.set({
			// 		'ChIJh-6MUZZXSjER23hUyLywxlU': {
			// 			placeId: 'ChIJh-6MUZZXSjER23hUyLywxlU',
			// 			name: 'Vịnh Hạ Long',
			// 			lat: '20.8434511',
			// 			long: '107.0795882',
			// 			address: {
			// 				city: 'Hạ Long',
			// 				district: '',
			// 				ward: '',
			// 				street: '',
			// 				longAddress:
			// 					'Thành phố Hạ Long, Quảng Ninh, Việt Nam',
			// 			},
			// 			vote: {
			// 				one: '',
			// 				two: '',
			// 				three: '',
			// 				four: '',
			// 				fire: '',
			// 				count: '',
			// 				detail: [
			// 					{
			// 						uid: '',
			// 						star: '',
			// 						time: '',
			// 						comment: '',
			// 					},
			// 				],
			// 			},
			// 			review: {},
			// 			distances: [
			// 				{
			// 					placeId: '',
			// 					distance: '',
			// 				},
			// 			],
			// 			images: ['', ''],
			// 			introduce: [
			// 				'Nhiều đảo đá vôi cây cối um tùm nằm dọc điểm du lịch nổi bật với hoạt động lặn, leo núi đá và đi bộ đường dài.',
			// 				'',
			// 			],
			// 			area: '1500 km3',
			// 			height: '100m',
			// 			hotels: [
			// 				{
			// 					name: '',
			// 					price: '',
			// 					longAddress: '',
			// 				},
			// 			],
			// 			foods: [
			// 				{
			// 					name: '',
			// 					price: '',
			// 					description: '',
			// 				},
			// 			],
			// 			travelAddress: [
			// 				{
			// 					name: '',
			// 					price: '',
			// 					longAddress: '',
			// 				},
			// 			],
			// 		},
			// 	})
			// 	.then(() => console.log('Data set.'));
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} back title='Profile' />
			<View style={styles.wrapperContent}>
				<ButtonSetting
					style={styles.button}
					text='Personal Information'
					onPress={() => navigation.navigate('PersonalInfo')}
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
					// onPress={() => addData()}
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
