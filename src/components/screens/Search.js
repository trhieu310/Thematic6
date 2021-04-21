import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Image,
	Platform,
	Dimensions,
	ScrollView,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import Header from '../items/heads/Header';
import MapView, {
	Marker,
	PROVIDER_GOOGLE,
	AnimatedRegion,
	Animated,
} from 'react-native-maps';
import { key, apiCall } from '../../constants/global';
import useLocationPermission from 'hook/useLocationPermission';
import { Icon } from 'react-native-elements';
import { SearchItem } from 'components/items';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const resultImg = require('../../../assets/address_32px.png');

const Search = ({ navigation }) => {
	const [region, setRegion] = useState({
		latitude: 15.9737549,
		longitude: 108.2493927,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	const [location, setLocation] = useState({});
	const [isMarker, setIsMarker] = useState(false);
	const [textSearch, setTextSearch] = useState('');
	const [locationStatus, setLocationStatus] = useState('');
	const granted = useLocationPermission();

	const fetchDataMaps = async place => {
		console.log(place);
		const response = await fetch(
			// `${apiCall.API_URL_FIND_FROM_TEXT}${place}${apiCall.API_INPUT_TYPE}${apiCall.API_FIELDS}${apiCall.API_KEY}${key.API_PLACE}`,
			`${apiCall.API_URL_FIND_FROM_ID}${place}${apiCall.API_KEY}${key.API_PLACE}`,
		);

		const data = await response.json();
		setLocation({
			latitude: data.result.geometry.location.lat,
			longitude: data.result.geometry.location.lng,
		});
		setRegion({
			latitude: data.result.geometry.location.lat,
			longitude: data.result.geometry.location.lng,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});
		setIsMarker(true);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} searchBar back />
			<View style={[styles.wrapperSearchBar]}>
				<GooglePlacesAutocomplete
					placeholder='Search'
					styles={{
						textInput: [styles.inputSearch, {}],
					}}
					onPress={(data, details = null) => {
						console.log(data, details);
						fetchDataMaps(data.place_id);
						setTextSearch('');
					}}
					GooglePlacesDetailsQuery={{
						key: key.API_PLACE,
					}}
					query={{
						key: key.API_PLACE,
						language: 'en',
					}}
					textInputProps={{
						onChangeText: textSearch => setTextSearch(textSearch),
					}}
				/>
				<TouchableOpacity style={styles.wrapperSearchBarButton}>
					<Image
						source={require('../../../assets/search_26px.png')}
						style={styles.imageSearch}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.wrapperContent}>
				<MapView
					zoomEnabled={true}
					zoomControlEnabled={true}
					zoomTapEnabled={true}
					style={styles.wrapperMaps}
					provider={PROVIDER_GOOGLE}
					// initialRegion={region}
					region={region}
					onRegionChange={region => setRegion(region)}>
					{isMarker && (
						<Marker
							draggable
							coordinate={location}
							onDragEnd={e =>
								setLocation({ x: e.nativeEvent.coordinate })
							}
						/>
					)}
				</MapView>
				<View style={styles.searchPage}>
					<View style={styles.searchTitle}>
						<Image style={styles.searchIcon} source={resultImg} />
						<Text style={styles.searchText}>Search Results</Text>
					</View>
					<ScrollView>
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Search;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapperSearchBar: {
		width: windowWidth - 40,
		paddingTop: 11,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-end',
		zIndex: 10001,
	},
	wrapperSearchBarButton: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		marginRight: 20,
		marginVertical: 13,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#eee',
		zIndex: 10001,
		position: 'absolute',
		right: 0,
		top: 2,
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
		paddingRight: 50,
		marginStart: 11,
		marginEnd: 15,
		zIndex: 10000,
	},
	wrapperContent: {
		flex: 1,
		backgroundColor: '#fff',
	},
	wrapperMaps: {
		flex: 1,
		height: 230,
		maxHeight: 230,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#eeeeee',
		zIndex: 9,
	},
	searchPage: {
		flex: 1,
		paddingHorizontal: 7,
		paddingVertical: 5,
		paddingBottom: Platform.OS === 'ios' ? 110 : 95,
	},
	searchTitle: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 40,
		minHeight: 40,
		height: 40,
		alignItems: 'center',
	},
	searchIcon: {
		width: 22,
		height: 22,
		marginEnd: 7,
	},
	searchText: {
		flex: 5,
		fontSize: 18,
	},
});
