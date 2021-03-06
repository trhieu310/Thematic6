import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions,
	SafeAreaView,
	ImageBackground,
	Image,
	ScrollView,
	ToastAndroid,
	Platform,
} from 'react-native';

import * as theme from '../../constants/global';
import {
	InputFieldLogin,
	LinkButton,
	LoginButton,
	SocialButton,
} from 'components/items';
const backgroundImg = require('../../../assets/images/login_bg.png');
const registerImg = require('../../../assets/images/rgt_image.jpg');
const windowHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = ({ navigation }) => {
	const [activeTab, setActiveTab] = useState('SignIn');
	GoogleSignin.configure({
		webClientId:
			'315121569493-11klvb41cqbsu97b0hhfu584148nskuh.apps.googleusercontent.com',
	});
	async function onFacebookButtonPress() {
		const result = await LoginManager.logInWithPermissions([
			'public_profile',
			'email',
		]);

		if (result.isCancelled) {
			throw 'User cancelled the login process';
		}

		const data = await AccessToken.getCurrentAccessToken();

		if (!data) {
			throw 'Something went wrong obtaining access token';
		}

		const facebookCredential = auth.FacebookAuthProvider.credential(
			data.accessToken,
		);

		return auth().signInWithCredential(facebookCredential);
	}

	async function onGoogleButtonPress() {
		try {
			await GoogleSignin.hasPlayServices();
			const { idToken } = await GoogleSignin.signIn();
			const googleCredential = auth.GoogleAuthProvider.credential(
				idToken,
			);
			return auth().signInWithCredential(googleCredential);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				showToastWithGravityAndOffset('Sign in was cancelled!');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				showToastWithGravityAndOffset('Progressing...');
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				showToastWithGravityAndOffset(
					'Play services is not available!',
				);
			} else {
				showToastWithGravityAndOffset(error.toString());
			}
		}
		// Get the users ID token
	}

	const showToastWithGravityAndOffset = message => {
		ToastAndroid.showWithGravityAndOffset(
			message,
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM,
			25,
			50,
		);
	};

	const isEmptyOrNull = text => {
		return text === null || text === '' ? true : false;
	};

	function SignIn() {
		const [showLoginPassword, setShowLoginPassword] = useState(false);
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [isValid, setIsValid] = useState(true);

		function isEmailValid(email) {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		}

		const onChangeTextEmail = email => {
			setEmail(email);
			setIsValid(isEmailValid(email));
		};

		const login = () => {
			if (!isEmptyOrNull(email) && !isEmptyOrNull(password)) {
				try {
					auth()
						.signInWithEmailAndPassword(email, password)
						.then(() => {
							console.log('User account signed in!');
							navigation.navigate('Home');
						})
						.catch(error => {
							if (
								error.code.toString() ===
								'auth/email-already-in-use'
							) {
								showToastWithGravityAndOffset(
									'That email address is already in use!',
								);
								console.log(
									'That email address is already in use!',
								);
							} else if (
								error.code.toString() === 'auth/invalid-email'
							) {
								showToastWithGravityAndOffset(
									'That email address is invalid!',
								);
								console.log('That email address is invalid!');
							} else if (
								error.code.toString() === 'auth/wrong-password'
							) {
								showToastWithGravityAndOffset(
									'Wrong password!',
								);
								console.log('Wrong password!');
							} else {
								showToastWithGravityAndOffset(error.toString());
								console.log(error.toString());
							}
						});
				} catch (error) {
					if (error.code.toString() === 'auth/email-already-in-use') {
						console.log('That email address is already in use!');
					} else if (error.code.toString() === 'auth/invalid-email') {
						showToastWithGravityAndOffset(
							'That email address is invalid!',
						);
					} else {
						showToastWithGravityAndOffset(error.toString());
						console.error(error);
					}
				}
			} else {
				showToastWithGravityAndOffset(
					'Email and password is required!',
				);
			}
		};

		return (
			<ImageBackground
				style={styles.imageBackground}
				source={backgroundImg}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<ScrollView>
						<SafeAreaView style={styles.container}>
							<InputFieldLogin
								name='envelope'
								size={25}
								type='font-awesome-5'
								value={email}
								color={!isValid ? theme.colors.RED : ''}
								onChangeText={text => onChangeTextEmail(text)}
								style={[styles.input, styles.inputTop]}
							/>
							<InputFieldLogin
								name='key'
								size={22}
								type='font-awesome-5'
								value={password}
								onChangeText={text => setPassword(text)}
								style={styles.input}
								placeholder='Password'
								secureTextEntry={true}
							/>
							<LoginButton
								style={[styles.loginButton]}
								onPress={() => login()}
							/>

							<LinkButton
								text='Forgot your passwrord'
								style={styles.forgotPasswordLinkButton}
							/>

							<SocialButton
								name='facebook'
								size={32}
								text='Connect with Facebook'
								style={[styles.fbLogin, styles.buttonGroup]}
								onPress={() =>
									onFacebookButtonPress().then(() => {
										console.log('Signed in with Facebook!');
										navigation.navigate('Home');
									})
								}
							/>
							<SocialButton
								text='Connect with Google'
								style={styles.buttonGroup}
								onPress={() =>
									onGoogleButtonPress().then(() => {
										console.log('Signed in with Google!');
										navigation.navigate('Home');
									})
								}
							/>

							<LinkButton
								text="Don't have an account? Sign up"
								style={styles.signupLinkButton}
								onPress={() => setActiveTab('SignUp')}
							/>
						</SafeAreaView>
					</ScrollView>
				</TouchableWithoutFeedback>
			</ImageBackground>
		);
	}

	function SignUp() {
		const [showLoginPassword, setShowLoginPassword] = useState(false);
		const [name, setName] = useState('');
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [confirmPassword, setConfirmPassword] = useState('');
		const [isRegisterEmail, setIsRegisterEmail] = useState(false);
		const [isConfirmPassword, setIsConfirmPassword] = useState(false);
		const [isValid, setIsValid] = useState(true);

		const registerAccount = () => {
			if (!isEmptyOrNull(email) && !isEmptyOrNull(password)) {
				if (password === confirmPassword) {
					try {
						auth()
							.createUserWithEmailAndPassword(email, password)
							.then(() => {
								console.log(
									'User account created & signed in!',
								);
							})
							.catch(error => {
								if (
									error.code.toString() ===
									'auth/email-already-in-use'
								) {
									showToastWithGravityAndOffset(
										'That email address is already in use!',
									);
									console.log(
										'That email address is already in use!',
									);
								} else if (
									error.code.toString() ===
									'auth/invalid-email'
								) {
									showToastWithGravityAndOffset(
										'That email address is invalid!',
									);
									console.log(
										'That email address is invalid!',
									);
								} else {
									showToastWithGravityAndOffset(
										error.toString(),
									);
								}
							});
					} catch (error) {
						if (error.code === 'auth/email-already-in-use') {
							showToastWithGravityAndOffset(
								'That email address is already in use!',
							);
							console.log(
								'That email address is already in use!',
							);
						} else if (error.code === 'auth/invalid-email') {
							showToastWithGravityAndOffset(
								'That email address is invalid!',
							);
							console.log('That email address is invalid!');
						} else {
							showToastWithGravityAndOffset(error);
						}
					}
				}
			} else {
				showToastWithGravityAndOffset(
					'Email and password is required!',
				);
			}
		};

		const onChangeTextEmail = email => {
			setEmail(email);
			setIsValid(isEmailValid(email));
		};

		const onChangeTextConfirmHandle = text => {
			setConfirmPassword(text);
			text === password
				? setIsConfirmPassword(true)
				: setIsConfirmPassword(false);
			console.log(password);
		};

		const isEmailValid = email => {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(String(email).toLowerCase());
		};
		return (
			<ImageBackground
				style={styles.imageBackground}
				source={backgroundImg}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					{isRegisterEmail === true ? (
						<ScrollView>
							<SafeAreaView style={styles.container}>
								<Image
									source={registerImg}
									style={[
										styles.imageRegister,
										styles.inputTop,
									]}
								/>
								<View style={styles.textViewRegister}>
									<Text style={styles.textRegister}>
										Register
									</Text>
								</View>
								<InputFieldLogin
									name='envelope'
									size={25}
									type='font-awesome-5'
									color={!isValid ? theme.colors.RED : ''}
									value={email}
									onChangeText={text =>
										onChangeTextEmail(text)
									}
									style={[styles.input, styles.registerTop]}
								/>
								<InputFieldLogin
									name='key'
									size={22}
									type='font-awesome-5'
									value={password}
									onChangeText={text => setPassword(text)}
									style={styles.input}
									placeholder='Password'
									secureTextEntry={true}
								/>
								<InputFieldLogin
									name='check'
									size={22}
									type='font-awesome-5'
									color={
										isConfirmPassword
											? theme.colors.GREEN
											: theme.colors.RED
									}
									value={confirmPassword}
									onChangeText={text =>
										onChangeTextConfirmHandle(text)
									}
									style={[
										styles.input,
										isConfirmPassword
											? styles.errorInput
											: '',
									]}
									placeholder='Confirm Password'
									secureTextEntry={true}
								/>
								<LoginButton
									onPress={() =>
										registerAccount(() =>
											navigation.navigate('Home'),
										)
									}
									title='Register'
									style={[styles.loginButton]}
								/>
								<LinkButton
									text='Sign In'
									style={styles.signupLinkButton}
									onPress={() => setActiveTab('SignIn')}
								/>
							</SafeAreaView>
						</ScrollView>
					) : (
						<ScrollView>
							<SafeAreaView style={styles.container}>
								<Image
									source={registerImg}
									style={[
										styles.imageRegister,
										styles.inputTop,
									]}
								/>
								<View style={styles.textViewRegister}>
									<Text style={styles.textRegister}>
										Discover{'\n'}New Place
									</Text>
								</View>

								<LoginButton
									title='Register by Email/Password'
									style={[
										styles.loginButton,
										styles.registerButton,
									]}
									onPress={() => setIsRegisterEmail(true)}
								/>

								<SocialButton
									name='facebook'
									size={32}
									text='Connect with Facebook'
									style={[styles.fbLogin, styles.buttonGroup]}
									onPress={() =>
										onFacebookButtonPress().then(() => {
											console.log(
												'Signed in with Facebook!',
											);
											navigation.navigate('Home');
										})
									}
								/>
								<SocialButton
									text='Connect with Google'
									style={styles.buttonGroup}
									onPress={() =>
										onGoogleButtonPress().then(() => {
											console.log(
												'Signed in with Google!',
											);
											navigation.navigate('Home');
										})
									}
								/>

								<LinkButton
									text='Sign In'
									style={styles.signupLinkButton}
									onPress={() => setActiveTab('SignIn')}
								/>
							</SafeAreaView>
						</ScrollView>
					)}
				</TouchableWithoutFeedback>
			</ImageBackground>
		);
	}

	return activeTab === 'SignIn' ? <SignIn /> : <SignUp />;
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		alignItems: 'center',
	},
	scrollView: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
	},
	imageBackground: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	input: {
		marginVertical: 5,
	},
	inputTop: {
		marginTop:
			windowHeight > 640 ? (Platform.OS === 'ios' ? 200 : 150) : 45,
	},
	registerTop: {
		marginTop: 25,
	},
	fbLogin: {
		backgroundColor: theme.colors.FACEBOOK,
	},
	loginButton: {
		marginTop: 37,
	},
	buttonGroup: {
		marginVertical: 16,
	},
	forgotPasswordLinkButton: {
		marginTop: 25,
		marginBottom: 50,
	},
	signupLinkButton: {
		marginTop: 15,
	},
	registerButton: {
		borderRadius: 15,
		marginTop: 65,
		marginBottom: 16,
	},
	imageRegister: {
		width: 88,
		height: 88,
		borderRadius: 25,
	},
	textViewRegister: {
		width: 205,
		paddingHorizontal: 5,
		marginTop: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textRegister: {
		fontSize: 30,
		fontWeight: 'bold',
		color: theme.colors.WHITE,
		textAlign: 'center',
	},
	errorInput: {
		borderColor: theme.colors.RED,
	},
});
