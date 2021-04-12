import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from '../items/heads/Header'

const Personal = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header 
				navigation={navigation} 
				back 
				title='Profile'
			/>
            <View style={styles.wrapperContent}>
                <Text>Profile</Text>
            </View>
        </SafeAreaView>
    )
}

export default Personal

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
})
