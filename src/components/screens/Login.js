import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TextInput,
	Keyboard,
	Dimensions,
} from 'react-native';

import { Icon } from 'react-native-elements';
import * as theme from '../../constants/global';

const Login = ({ navigation }) => {
	const [activeTab, setActiveTab] = useState('SignIn');

	function SignIn() {
		const [showLoginPassword, setShowLoginPassword] = useState(false);
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		function isEmailValid(email) {
			const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			return re.test(String(email).toLowerCase());
		}

		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<View style={styles.bigCircle} />
					<View style={styles.smallCircle} />
					<View style={styles.centerizedView}>
						<View style={styles.authBox}>
							<View style={styles.logoBox}>
								<Icon
									color='#fff'
									name='plane-departure'
									type='font-awesome-5'
									size={50}
								/>
							</View>
							<Text style={styles.loginTitleText}>Login</Text>
							<View style={styles.hr} />
							<View
								style={[
									styles.inputView,
									!isEmailValid(email) && email.length > 0
										? styles.wrong
										: '',
								]}>
								<Icon
									style={{ paddingHorizontal: 4 }}
									name='envelope'
									type='font-awesome'
									color='#d9d9d9'
									size={22}
								/>
								<TextInput
									style={styles.input}
									placeholder='Email'
									placeholderTextColor='#d9d9d9'
									keyboardType='email-address'
									textContentType='emailAddress'
									autoCapitalize='none'
									autoCompleteType='email'
									returnKeyType='next'
									onChangeText={text => setEmail(text)}
								/>
							</View>
							<View style={styles.inputView}>
								<Icon
									style={{ paddingHorizontal: 4 }}
									name='key'
									type='font-awesome-5'
									color='#d9d9d9'
									size={22}
								/>
								<TextInput
									style={styles.input}
									placeholder='Password'
									placeholderTextColor='#d9d9d9'
									secureTextEntry={!showLoginPassword}
									textContentType='password'
									returnKeyType='done'
									onChangeText={text => setPassword(text)}
								/>
								<TouchableOpacity
									style={{ paddingVertical: 4 }}
									onPress={() => {
										setShowLoginPassword(
											!showLoginPassword,
										);
									}}>
									<Icon
										style={{ paddingHorizontal: 4 }}
										name={
											!showLoginPassword
												? 'eye'
												: 'eye-slash'
										}
										type='font-awesome'
										color='#d9d9d9'
										size={22}
									/>
								</TouchableOpacity>
							</View>
							<TouchableOpacity
								style={styles.loginButton}
								onPress={() => navigation.navigate('Home')}>
								<Text style={styles.loginButtonText}>
									Login
								</Text>
							</TouchableOpacity>
							<View style={styles.divided}>
								<Text style={styles.dividedText}>OR</Text>
							</View>
							<View style={styles.socialSignin}>
								<TouchableOpacity style={styles.socialButton}>
									<View
										style={[
											styles.logoSocial,
											styles.ggSocial,
										]}>
										<Icon
											color='#fff'
											name='google'
											type='font-awesome-5'
											size={25}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.socialButton}>
									<View
										style={[
											styles.logoSocial,
											styles.fbSocial,
										]}>
										<Icon
											color='#fff'
											name='facebook-f'
											type='font-awesome-5'
											size={25}
										/>
									</View>
								</TouchableOpacity>
							</View>
							<TouchableOpacity>
								<Text style={styles.forgotPasswordText}>
									Forgot Password?
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.registerSwitch}
								onPress={() => setActiveTab('SignUp')}>
								<Icon
									color='#fff'
									name='swap-horiz'
									type='material'
									size={25}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	function SignUp() {
		const [showLoginPassword, setShowLoginPassword] = useState(false);
		const [name, setName] = useState('');
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		function isEmailValid(email) {
			const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			return re.test(String(email).toLowerCase());
		}
		return (
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.container}>
					<View style={styles.bigCircle} />
					<View style={styles.smallCircle} />
					<View style={styles.centerizedView}>
						<View style={styles.authBox}>
							<View style={styles.logoBox}>
								<Icon
									color='#fff'
									name='plane-departure'
									type='font-awesome-5'
									size={50}
								/>
							</View>
							<Text style={styles.loginTitleText}>Register</Text>
							<View style={styles.hr} />
							<View style={styles.inputView}>
								<Icon
									style={{ paddingHorizontal: 4 }}
									name='user-o'
									type='font-awesome'
									color='#d9d9d9'
									size={22}
								/>
								<TextInput
									style={styles.input}
									placeholder='Name'
									placeholderTextColor='#d9d9d9'
									textContentType='name'
									autoCapitalize='none'
									returnKeyType='next'
									onChangeText={text => setName(text)}
								/>
							</View>
							<View
								style={[
									styles.inputView,
									!isEmailValid(email) && email.length > 0
										? styles.wrong
										: '',
								]}>
								<Icon
									style={{ paddingHorizontal: 4 }}
									name='envelope'
									type='font-awesome'
									color='#d9d9d9'
									size={22}
								/>
								<TextInput
									style={styles.input}
									placeholder='Email'
									placeholderTextColor='#d9d9d9'
									keyboardType='email-address'
									textContentType='emailAddress'
									autoCapitalize='none'
									autoCompleteType='email'
									returnKeyType='next'
									onChangeText={text => setEmail(text)}
								/>
							</View>
							<View style={styles.inputView}>
								<Icon
									style={{ paddingHorizontal: 4 }}
									name='key'
									type='font-awesome-5'
									color='#d9d9d9'
									size={22}
								/>
								<TextInput
									style={styles.input}
									placeholder='Password'
									placeholderTextColor='#d9d9d9'
									secureTextEntry={!showLoginPassword}
									textContentType='password'
									returnKeyType='done'
									onChangeText={text => setPassword(text)}
								/>
								<TouchableOpacity
									style={{ paddingVertical: 4 }}
									onPress={() => {
										setShowLoginPassword(
											!showLoginPassword,
										);
									}}>
									<Icon
										style={{ paddingHorizontal: 4 }}
										name={
											!showLoginPassword
												? 'eye'
												: 'eye-slash'
										}
										type='font-awesome'
										color='#d9d9d9'
										size={22}
									/>
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={styles.loginButton}>
								<Text style={styles.loginButtonText}>
									Register
								</Text>
							</TouchableOpacity>
							<View style={styles.divided}>
								<Text style={styles.dividedText}>OR</Text>
							</View>
							<View style={styles.socialSignin}>
								<TouchableOpacity style={styles.socialButton}>
									<View
										style={[
											styles.logoSocial,
											styles.ggSocial,
										]}>
										<Icon
											color='#fff'
											name='google'
											type='font-awesome-5'
											size={25}
										/>
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.socialButton}>
									<View
										style={[
											styles.logoSocial,
											styles.fbSocial,
										]}>
										<Icon
											color='#fff'
											name='facebook-f'
											type='font-awesome-5'
											size={25}
										/>
									</View>
								</TouchableOpacity>
							</View>
							<TouchableOpacity
								style={styles.registerSwitch}
								onPress={() => setActiveTab('SignIn')}>
								<Icon
									color='#fff'
									name='swap-horiz'
									type='material'
									size={25}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	return activeTab === 'SignIn' ? <SignIn /> : <SignUp />;
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	bigCircle: {
		width: Dimensions.get('window').height * 0.6,
		height: Dimensions.get('window').height * 0.6,
		backgroundColor: theme.colors.PRIMARY,
		borderRadius: 1000,
		position: 'absolute',
		right: Dimensions.get('window').width * 0.25,
		top: -50,
	},
	smallCircle: {
		width: Dimensions.get('window').height * 0.4,
		height: Dimensions.get('window').height * 0.4,
		backgroundColor: theme.colors.PRIMARY,
		borderRadius: 1000,
		position: 'absolute',
		bottom: Dimensions.get('window').width * -0.2,
		right: Dimensions.get('window').width * -0.3,
	},
	centerizedView: {
		width: '100%',
		top: '15%',
	},
	authBox: {
		width: '90%',
		backgroundColor: '#fafafa',
		borderRadius: 20,
		borderBottomEndRadius: 3,
		alignSelf: 'center',
		paddingHorizontal: 14,
		paddingBottom: 30,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	logoBox: {
		width: 100,
		height: 100,
		backgroundColor: theme.colors.PRIMARY,
		borderRadius: 1000,
		alignSelf: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		top: -50,
		marginBottom: -50,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	loginTitleText: {
		fontSize: 26,
		fontWeight: 'bold',
		marginTop: 10,
		textAlign: 'center',
	},
	hr: {
		width: '100%',
		height: 0.5,
		backgroundColor: '#444',
		marginTop: 6,
	},
	inputBox: {
		marginTop: 10,
	},
	inputLabel: {
		fontSize: 18,
		marginBottom: 6,
	},
	loginButton: {
		backgroundColor: theme.colors.PRIMARY,
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 4,
	},
	loginButtonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
	},
	registerText: {
		textAlign: 'center',
		marginTop: 20,
		fontSize: 16,
	},
	forgotPasswordText: {
		textAlign: 'center',
		marginTop: 12,
		fontSize: 16,
	},
	divided: {
		paddingVertical: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dividedText: {
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9',
		width: 100,
		textAlign: 'center',
		fontSize: 18,
	},
	inputView: {
		height: 40,
		borderWidth: 1,
		borderColor: '#d9d9d9',
		borderRadius: 3,
		marginTop: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		height: 40,
		fontSize: 16,
		paddingHorizontal: 4,
		color: '#777',
	},
	socialSignin: {
		flexDirection: 'row',
		marginVertical: 4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	socialButton: {
		width: 40,
		height: 40,
		padding: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginHorizontal: 8,
	},
	logoSocial: {
		height: 35,
		width: 35,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 17,
	},
	ggSocial: {
		backgroundColor: theme.colors.GOOGLE,
	},
	fbSocial: {
		backgroundColor: theme.colors.FACEBOOK,
	},
	registerSwitch: {
		width: 35,
		height: 35,
		textAlign: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: theme.colors.PRIMARY,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
		borderTopStartRadius: 15,
		borderBottomEndRadius: 3,
	},
	wrong: {
		borderColor: theme.colors.RED,
	},
});
