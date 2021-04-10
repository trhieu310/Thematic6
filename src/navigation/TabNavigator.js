import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator } from './StackNavigation';
import Home from 'components/screens/Home';
import History from 'components/screens/History'
import Search from 'components/screens/Search';
import Scan from 'components/screens/Scan';
import Personal from 'components/screens/Personal';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
	return (<TouchableOpacity
		style={[styles.customButton, styles.shadow]}
		onPress={onPress}
	>
		<View style={styles.viewCustomButton}>
			{children}
		</View>
	</TouchableOpacity>)
}

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					position: 'absolute',
					bottom: 15,
					left: 10,
					right: 10,
					elevation: 0,
					borderRadius: Platform.OS === 'ios' ? 25 : 15,
					height: 90,
					backgroundColor: '#ffffff',
					...styles.shadow,
				},
				tabStyle: {
					top: Platform.OS === 'ios' ? 20 : 5
				},
			}}
			>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						return <View
							style={[
								styles.viewBag,
								focused
									? styles.bgFocus
									: styles.bgNoneFocus,
							]}>
							<Image 
								source={focused ? require('../../assets/home_56px.png') : require('../../assets/home_24px.png')}
								resizeMode='contain'
								style={styles.iconImg}
							/>
						</View>
					},
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarIcon: ({ focused }) => {
						return <View
							style={[
								styles.viewBag,
								focused
									? styles.bgFocus
									: styles.bgNoneFocus,
							]}>
							<Image 
								source={focused ? require('../../assets/search_56px.png') : require('../../assets/search_26px.png')}
								resizeMode='contain'
								style={styles.iconImg}
							/>
						</View>
					},
				}}
			/>
			<Tab.Screen
				name="Scan"
				component={Scan}
				options={{
					tabBarIcon: ({ focused }) => (
						<Image 
							source={require('../../assets/qr_code_64px.png')}
							resizeMode='contain'
							style={styles.iconImgCustom}
						/>
					),
					tabBarButton: (props) => {
						return <CustomTabBarButton {...props} />	
					}
						
				}}
			/>
			<Tab.Screen
				name="History"
				component={History}
				options={{
					tabBarIcon: ({ focused }) => {
						return <View
							style={[
								styles.viewBag,
								focused
									? styles.bgFocus
									: styles.bgNoneFocus,
							]}>
							<Image 
								source={focused ? require('../../assets/address_64px.png') : require('../../assets/address_32px.png')}
								resizeMode='contain'
								style={styles.iconImg}
							/>
						</View>
					},
				}}
			/>
			<Tab.Screen
				name="Personal"
				component={Personal}
				options={{
					tabBarIcon: ({ focused }) => {
						return <View
							style={[
								styles.viewBag,
								focused
									? styles.bgFocus
									: styles.bgNoneFocus,
							]}>
							<Image 
								source={focused ? require('../../assets/icons8-male_user.png') : require('../../assets/male_user_32px.png')}
								resizeMode='contain'
								style={styles.iconImg}
							/>
						</View>
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
		height: 24
	},
	iconImgCustom: {
		width: 40,
		height: 40
	},
	bgFocus: {
		backgroundColor: '#DC0048',
		shadowColor: '#999',
		shadowOffset: {
			width: -3,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 3,
	},
	bgNoneFocus: {
		backgroundColor: '#fff'
	},
	shadow: {
		shadowColor: '#999',
		shadowOffset: {
			width: -3,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
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
		backgroundColor: '#DC0048'
	}
});

export default BottomTabNavigator;
