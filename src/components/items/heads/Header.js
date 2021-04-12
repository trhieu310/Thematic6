import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform, TextInput } from 'react-native'

const Header = ({
    back, 
    search, 
    title, 
    searchBar,  
    value,
    onChangeText, 
    navigation, 
    onPressSearch, 
    headerStyle, 
    backStyle, 
    titleStyle, 
    searchStyle, 
    searchBarStyle}) => {
    return (
        <SafeAreaView style={styles.container}>
            { searchBar ? 
            <View style={[styles.wrapperContent, headerStyle]}>
                { back && 
                <TouchableOpacity style={[styles.wrapperBack, backStyle]} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/back_64px.png')} style={styles.imageBack} />
                </TouchableOpacity>
                }
                <View style={[styles.wrapperSearchBar, !back ? {marginLeft: 20} : '']}>
                    <TextInput 
                        placeholder='Search'
                        value={value}
                        onChangeText={onChangeText}
                        style={[styles.inputSearch, searchBarStyle]}
                    />
                    <TouchableOpacity style={styles.wrapperSearchBarButton} onPress={onPressSearch}>
                        <Image source={require('../../../../assets/search_26px.png')} style={styles.imageSearch} />
                    </TouchableOpacity>
                </View>
            </View> : 
            <View style={styles.wrapperContent}>
                { back && 
                <TouchableOpacity style={[styles.wrapperBack, backStyle]} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/back_64px.png')} style={styles.imageBack} />
                </TouchableOpacity>
                }
                <View style={[styles.wrapperTitle, search ? '' : {paddingRight: 65}]}>
                    <Text style={[styles.title, titleStyle]}>{title ? title : ''}</Text>
                </View>
                { search &&
                <TouchableOpacity style={[styles.wrapperSearch, searchStyle]} onPress={() => navigation.navigate('Search')}>
                    <Image source={require('../../../../assets/search_26px.png')} style={styles.imageSearch} />
                </TouchableOpacity>
                }
            </View>
            }
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 45 : 0,
        left: 0,
        right: 0,
        height: 70,
        shadowColor: '#999',
		shadowOffset: {
			width: -1,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 1.5,
		elevation: 3,
        zIndex: 9999
    },
    wrapperContent: {
        flex: 1,
        width: '100%',
        height: 70,
        backgroundColor: 'rgba(255,255,255, 0.3)',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    wrapperBack: {
        width: 40,
        height: 40,
        marginHorizontal: 11,
        marginVertical: 15,
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBack: {
        width: 28,
        height: 28,
    },
    wrapperTitle: {
        flex: 1,
        height: 70,
        maxHeight: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    wrapperSearch: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        marginHorizontal: 11,
        marginVertical: 13,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee'
    },
    wrapperSearchBar: {
        flex: 1,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    wrapperSearchBarButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginRight: 20,
        marginLeft: -45,
        marginVertical: 13,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee'
    },
    inputSearch: {
        flex: 1,
        height: 48,
        fontSize: 18,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#eee',
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingRight: 50
    }
})