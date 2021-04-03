import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './DrawerNavigator';

const Navigation = () => {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	);
};

export default Navigation;

const styles = StyleSheet.create({});
