import React from 'react';
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from './../constants/global';

import Home from 'components/screens/Home';
import Login from 'components/screens/Login';
import Search from 'components/screens/Search';
import Scan from 'components/screens/Scan';
import History from 'components/screens/History';
import Personal from 'components/screens/Personal';
import LoadingFirst from 'components/screens/Loading/LoadingFirst';

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
		<Stack.Navigator 
			initialRouteName="Home"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen 
				name="Home" 
				component={Home} 
			/>
		</Stack.Navigator>
	);
};

const SearchStackNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Search"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen 
				name="Search" 
				component={Search} 
			/>
		</Stack.Navigator>
	)
}

const ScanStackNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Scan"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen 
				name="Scan" 
				component={Scan} 
			/>
		</Stack.Navigator>
	)
}

const HistoryStackNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="History"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen 
				name="History" 
				component={History} 
			/>
		</Stack.Navigator>
	)
}

const PersonalStackNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="Personal"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen 
				name="Personal" 
				component={Personal} 
			/>
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
	
})

export { 
	HomeStackNavigator, 
	LoginStackNavigator, 
	SearchStackNavigator,
	ScanStackNavigator,
	HistoryStackNavigator,
	PersonalStackNavigator 
};
