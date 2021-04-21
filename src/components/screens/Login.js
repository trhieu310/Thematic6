import React, { useState, useEffect, useRef } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TextInput,
	Keyboard,
	Dimensions,
	SafeAreaView,
	ImageBackground,
	Image,
	ScrollView,
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
								onChangeText={text => setEmail(text)}
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
								onPress={() => navigation.navigate('Home')}
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
							/>
							<SocialButton
								text='Connect with Google'
								style={styles.buttonGroup}
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

		function isEmailValid(email) {
			const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			return re.test(String(email).toLowerCase());
		}
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
									value={email}
									onChangeText={text => setEmail(text)}
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
									value={confirmPassword}
									onChangeText={text =>
										setConfirmPassword(text)
									}
									style={styles.input}
									placeholder='Confirm Password'
									secureTextEntry={true}
								/>
								<LoginButton
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
								/>
								<SocialButton
									text='Connect with Google'
									style={styles.buttonGroup}
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
		marginTop: windowHeight > 640 ? 200 : 45,
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
});
