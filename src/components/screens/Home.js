import Header from 'components/items/heads/Header';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, ImageBackground } from 'react-native';

const Home = ({navigation}) => {
	return (
		<SafeAreaView style={styles.container}>
			<Header 
				navigation={navigation} 
				search
				back 
				title='Home' 
			/>
			<View style={styles.wrapperContent}>
				<View styles={styles.homeImage}>
					<ImageBackground source={require('../../../assets/images/home_bg.jpg')} style={styles.homeBg} />
				</View>
				<View style={styles.homePage}>
					<Text>Home</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	wrapperContent: {
		flex: 1,
		backgroundColor: '#fff'
	},
	homeImage: {
		flex: 1,
		height: 230,
		maxHeight: 230,
	},
	homeBg: {
		flex: 1,
		height: 230,
		maxHeight: 230,
	},
	homePage: {
		flex: 1,
		marginTop: 230,
		paddingHorizontal: 7,
		paddingVertical: 5
	}
});
