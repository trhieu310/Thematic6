import React from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
	HomeStackNavigator,
	SearchStackNavigator,
	ScanStackNavigator,
	HistoryStackNavigator,
	PersonalStackNavigator,
} from './StackNavigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.customButton, styles.shadow]}
			onPress={onPress}>
			<View style={styles.viewCustomButton}>{children}</View>
		</TouchableOpacity>
	);
};

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			tabBarOptions={{
				showLabel: false,
				style: {
					position: 'absolute',
					bottom: Platform.OS === 'ios' ? 15 : 10,
					left: 10,
					right: 10,
					elevation: 0,
					borderRadius: Platform.OS === 'ios' ? 25 : 15,
					height: 90,
					backgroundColor: '#ffffff',
					...styles.shadow,
				},
				tabStyle: {
					top: Platform.OS === 'ios' ? 20 : 5,
				},
			}}>
			<Tab.Screen
				name='Home'
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={[
									styles.viewBag,
									focused
										? styles.bgFocus
										: styles.bgNoneFocus,
								]}>
								<Image
									source={
										focused
											? require('../../assets/home_56px.png')
											: require('../../assets/home_24px.png')
									}
									resizeMode='contain'
									style={styles.iconImg}
								/>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name='Search'
				component={SearchStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={[
									styles.viewBag,
									focused
										? styles.bgFocus
										: styles.bgNoneFocus,
								]}>
								<Image
									source={
										focused
											? require('../../assets/search_56px.png')
											: require('../../assets/search_26px.png')
									}
									resizeMode='contain'
									style={styles.iconImg}
								/>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name='Scan'
				component={ScanStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image
							source={require('../../assets/qr_code_64px.png')}
							resizeMode='contain'
							style={styles.iconImgCustom}
						/>
					),
					tabBarButton: props => {
						return <CustomTabBarButton {...props} />;
					},
				}}
			/>
			<Tab.Screen
				name='History'
				component={HistoryStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={[
									styles.viewBag,
									focused
										? styles.bgFocus
										: styles.bgNoneFocus,
								]}>
								<Image
									source={
										focused
											? require('../../assets/address_64px.png')
											: require('../../assets/address_32px.png')
									}
									resizeMode='contain'
									style={styles.iconImg}
								/>
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name='Personal'
				component={PersonalStackNavigator}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={[
									styles.viewBag,
									focused
										? styles.bgFocus
										: styles.bgNoneFocus,
								]}>
								<Image
									source={
										focused
											? require('../../assets/icons8-male_user.png')
											: require('../../assets/male_user_32px.png')
									}
									resizeMode='contain'
									style={styles.iconImg}
								/>
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	viewBag: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 45,
		height: 45,
		borderRadius: 23,
	},
	iconImg: {
		width: 24,
		height: 24,
	},
	iconImgCustom: {
		width: 40,
		height: 40,
	},
	bgFocus: {
		backgroundColor: '#DC0048',
		shadowColor: '#555',
		shadowOffset: {
			width: Platform.OS === 'ios' ? -1 : -3,
			height: Platform.OS === 'ios' ? 2 : 6,
		},
		shadowOpacity: 0.5,
		shadowRadius: Platform.OS === 'ios' ? 3.5 : 5,
		elevation: Platform.OS === 'ios' ? 3 : 5,
	},
	bgNoneFocus: {
		backgroundColor: '#fff',
	},
	shadow: {
		shadowColor: '#555',
		shadowOffset: {
			width: Platform.OS === 'ios' ? -1 : -3,
			height: Platform.OS === 'ios' ? 2 : 6,
		},
		shadowOpacity: 0.25,
		shadowRadius: Platform.OS === 'ios' ? 3.5 : 5,
		elevation: Platform.OS === 'ios' ? 3 : 5,
	},
	customButton: {
		top: Platform.OS === 'ios' ? -15 : 0,
		width: 70,
		height: 70,
		borderRadius: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewCustomButton: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: '#DC0048',
	},
});

export default BottomTabNavigator;
