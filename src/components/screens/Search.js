import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from '../items/heads/Header'

const Search = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header 
				navigation={navigation} 
				searchBar
				back 
			/>
            <View style={styles.wrapperContent}>
                <View style={styles.wrapperMaps}>
                    <Text>Maps</Text>
                </View>
				<View style={styles.searchPage}>
					<Text>Search</Text>
				</View>
			</View>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
		flex: 1
	},
	wrapperContent: {
		flex: 1,
		backgroundColor: '#fff'
	},
    wrapperMaps: {
        flex: 1,
        height: 230,
        maxHeight: 230,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee'
    },
    searchPage: {
        flex: 1,
        paddingHorizontal: 7,
		paddingVertical: 5
    }
})
