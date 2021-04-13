import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from '../items/heads/Header'
const Scan = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header 
				navigation={navigation} 
				back 
			/>
            <View style={styles.wrapperContent}>
                <Text>Scan</Text>
            </View>
        </SafeAreaView>
    )
}

export default Scan

const styles = StyleSheet.create({
    container: {
		flex: 1
	},
	wrapperContent: {
		flex: 1,
		backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
	}
})
