import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigator, ScanStackNavigator } from './StackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen name="Scan" component={ScanStackNavigator} />
			<Tab.Screen name="Home" component={HomeStackNavigator} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
