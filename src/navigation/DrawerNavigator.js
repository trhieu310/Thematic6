import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import { LoginStackNavigator } from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={TabNavigator} />
			<Drawer.Screen name="Login" component={LoginStackNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
