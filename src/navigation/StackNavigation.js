import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from './../constants/global';

import Home from 'components/screens/Home';
import Login from 'components/screens/Login';
import Scanner from 'components/screens/Scanner';

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: theme.colors.PRIMARY,
	},
	headerTintColor: 'white',
	headerBackTitle: 'Back',
};

const LoginStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};

const HomeStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};

const ScanStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Scan" component={Scanner} />
		</Stack.Navigator>
	);
};

export { HomeStackNavigator, LoginStackNavigator, ScanStackNavigator };
