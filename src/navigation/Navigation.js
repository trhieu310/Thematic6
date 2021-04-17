import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerNavigator from './DrawerNavigator';

const Navigation = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default Navigation;

const styles = StyleSheet.create({});
