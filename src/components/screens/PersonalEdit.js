import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PersonalEdit = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} back title='Profile' />
			<View style={styles.wrapperContent}></View>
		</SafeAreaView>
	);
};

export default PersonalEdit;

const styles = StyleSheet.create({});
