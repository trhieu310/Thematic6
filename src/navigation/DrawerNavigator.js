import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import {
	HomeStackNavigator,
	LoginStackNavigator,
	SearchStackNavigator,
} from './StackNavigation';
import Home from 'components/screens/Home';
import Search from 'components/screens/Search';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			// drawerStyle={drawerStyle}
			initialRouteName='Home'>
			<Drawer.Screen name='Home' component={TabNavigator} />
			<Drawer.Screen
				name='Login'
				component={LoginStackNavigator}
				options={{ gestureEnabled: false }}
			/>
		</Drawer.Navigator>
	);
};

const drawerStyle = {
	activeTintColor: 'black',
	inactiveTintColor: 'black',
	labelStyle: {
		fontFamily: 'montserrat',
		marginVertical: 16,
		marginHorizontal: 0,
	},
	iconContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemStyle: {},
};

export default DrawerNavigator;
