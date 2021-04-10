import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from './../constants/global';

import Home from 'components/screens/Home';
import Login from 'components/screens/Login';

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
		<Stack.Navigator screenOptions={screenOptionStyle}
		>
			<Stack.Screen 
				name="Home" 
				component={Home} 
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	
})

export { HomeStackNavigator, LoginStackNavigator };
