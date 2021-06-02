import { ButtonSetting } from 'components/items';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../items/heads/Header';
import auth from '@react-native-firebase/auth';
import { LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';
import { databaseUrl } from '../../constants/global';
import { ScrollView } from 'react-native';

const Personal = ({ navigation }) => {
	const [user, setUser] = useState(auth().currentUser);
	const [initializing, setInitializing] = useState(true);
	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(user => {
			setUser(user);
			if (initializing) setInitializing(false);
		});
		return subscriber;
	}, []);

	const logOut = async () => {
		try {
			if (user) {
				try {
					if (user.providerData[0].providerId === 'facebook.com') {
						LoginManager.logOut();
						await auth()
							.signOut()
							.then(() => console.log('Signed out!'));
					} else if (
						user.providerData[0].providerId === 'google.com'
					) {
						GoogleSignin.signOut();
						await auth()
							.signOut()
							.then(() => console.log('Signed out!'));
					}
					auth().onAuthStateChanged(user => {
						setUser(user);
						if (initializing) setInitializing(false);
					});
				} catch (error) {
					console.log(error);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const RenderPSButton = () => {
		return user ? (
			<ButtonSetting
				style={styles.button}
				text='Personal Information'
				onPress={() => navigation.navigate('PersonalInfo')}
			/>
		) : (
			<ButtonSetting
				style={styles.button}
				text='Log in'
				onPress={() => navigation.navigate('Login')}
			/>
		);
	};

	const RenderLoButton = () => {
		return user ? (
			<ButtonSetting
				disabled={false}
				style={styles.button}
				text='Log out'
				backgroundColor='#F66060'
				onPress={() => logOut()}
			/>
		) : null;
	};

	if (initializing) return null;

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} back title='Profile' />
			<ScrollView>
				<View style={styles.wrapperContent}>
					<RenderPSButton />
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
					<RenderLoButton />
				</View>
			</ScrollView>
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
