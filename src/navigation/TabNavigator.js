import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigator } from './StackNavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeStackNavigator} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
