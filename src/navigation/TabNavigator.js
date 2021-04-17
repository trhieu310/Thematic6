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

const CustomTabBarButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.customButton, styles.shadow]}
			onPress={onPress}>
			<View style={styles.viewCustomButton}>{children}</View>
		</TouchableOpacity>
	);
};

const listTab = [
	{
		name: 'Home',
		component: HomeStackNavigator,
		icon: {
			focused: require('assets/home_56px.png'),
			normal: require('assets/home_24px.png'),
		},
	},
	{
		name: 'Search',
		component: SearchStackNavigator,
		icon: {
			focused: require('assets/search_56px.png'),
			normal: require('assets/search_26px.png'),
		},
	},
	{
		name: 'Scan',
		component: ScanStackNavigator,
		source: require('assets/qr_code_64px.png'),
		icon: {
			focused: '',
			normal: '',
		},
	},
	{
		name: 'History',
		component: HistoryStackNavigator,
		icon: {
			focused: require('assets/address_64px.png'),
			normal: require('assets/address_32px.png'),
		},
	},
	{
		name: 'Personal',
		component: PersonalStackNavigator,
		icon: {
			focused: require('assets/icons8-male_user.png'),
			normal: require('assets/male_user_32px.png'),
		},
	},
];

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			tabBarOptions={{
				showLabel: false,
				style: [styles.navigatorStyle, styles.shadow],
				tabStyle: {
					top: Platform.OS === 'ios' ? 20 : 5,
				},
			}}
			// tabBar={({ descriptors, navigation, state,  }) => {}}
		>
			{listTab.map((tabItem, index) => {
				const { name, component, icon, source } = tabItem;

				if (name !== 'Scan')
					return (
						<Tab.Screen
							key={name}
							name={name}
							component={component}
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
														? icon.focused
														: icon.normal
												}
												resizeMode='contain'
												style={styles.iconImg}
											/>
										</View>
									);
								},
							}}
						/>
					);

				return (
					<Tab.Screen
						key={name}
						name='Scan'
						component={ScanStackNavigator}
						options={{
							tabBarIcon: ({ focused }) => (
								<Image
									source={source}
									resizeMode='contain'
									style={styles.iconImgCustom}
								/>
							),
							tabBarButton: props => {
								return <CustomTabBarButton {...props} />;
							},
						}}
					/>
				);
			})}
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
	navigatorStyle: {
		position: 'relative',
		// bottom: Platform.OS === 'ios' ? 15 : 10,
		// left: 10,
		// right: 10,
		elevation: 0,
		overflow: 'hidden',
		borderRadius: Platform.OS === 'ios' ? 25 : 15,
		height: 90,
		backgroundColor: '#ffffff',
	},
});

export default BottomTabNavigator;
