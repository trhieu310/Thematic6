import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../items/heads/Header'

const History = ({navigation}) => {
	return (
		<SafeAreaView style={styles.container}>
            <Header 
				navigation={navigation} 
				search
				back 
				title='History'
			/>
            <View style={styles.wrapperContent}>
                <Text>History</Text>
            </View>
        </SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	wrapperContent: {
		flex: 1,
		paddingTop: 70,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
});

export default History;
