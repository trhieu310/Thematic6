import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	Image,
	Dimensions,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import Header from '../items/heads/Header';

const { width, height } = Dimensions.get('window');

const DATA = [
	{
		id: '1',
		title1: 'Vịnh Hạ Long',
		title2: 'Quảng Ninh',
		time1: '15:05:27',
		time2: '25/07/2017',
		uri:
			'https://owa.bestprice.vn/images/tours/uploads/ha-long-tuan-chau-2-ngay-1-dem-5e5642a3b1b03.jpg',
	},
	{
		id: '2',
		title1: 'Đèo Hải Vân',
		title2: 'Đà Nẵng',
		time1: '09:05:00',
		time2: '23/06/2017',
		uri:
			'https://danangfantasticity.com/wp-content/uploads/2015/09/deo-hai-van-01-1024x768.jpg',
	},
	{
		id: '3',
		title1: 'Biển Hồ ',
		title2: 'Gia Lai',
		time1: '11:05:27',
		time2: '05/03/2017',
		uri:
			'https://baoquocte.vn/stores/news_dataimages/hoangha/092016/16/09/091410_Nho-playcu1.jpg',
	},
	{
		id: '4',
		title1: 'Phú Quốc',
		title2: 'Kiên Giang',
		time1: '08:23:56',
		time2: '11/01/2017',
		uri:
			'https://vneconomy.mediacdn.vn/thumb_w/640/2019/8/21/phu-quoc-1566354996006720372424-crop-156635500015546959117.jpeg',
	},
	{
		id: '5',
		title1: 'Vịnh Hạ Long',
		title2: 'Quảng Ninh',
		time1: '15:05:27',
		time2: '25/07/2017',
		uri:
			'https://owa.bestprice.vn/images/tours/uploads/ha-long-tuan-chau-2-ngay-1-dem-5e5642a3b1b03.jpg',
	},
	{
		id: '6',
		title1: 'Đèo Hải Vân',
		title2: 'Đà Nẵng',
		time1: '09:05:00',
		time2: '23/06/2017',
		uri:
			'https://danangfantasticity.com/wp-content/uploads/2015/09/deo-hai-van-01-1024x768.jpg',
	},
	{
		id: '7',
		title1: 'Biển Hồ ',
		title2: 'Gia Lai',
		time1: '11:05:27',
		time2: '05/03/2017',
		uri:
			'https://baoquocte.vn/stores/news_dataimages/hoangha/092016/16/09/091410_Nho-playcu1.jpg',
	},
	{
		id: '8',
		title1: 'Phú Quốc',
		title2: 'Kiên Giang',
		time1: '08:23:56',
		time2: '11/01/2017',
		uri:
			'https://vneconomy.mediacdn.vn/thumb_w/640/2019/8/21/phu-quoc-1566354996006720372424-crop-156635500015546959117.jpeg',
	},
];

const Item = ({ title1, title2, time1, time2, image }) => (
	<View style={styles.item}>
		<Image source={image} style={styles.image} />
		<View style={styles.text}>
			<View style={styles.contilte}>
				<Text style={styles.title}>{title1}</Text>
				<Text style={styles.title}>{title2}</Text>
			</View>
			<View style={styles.contime}>
				<Text style={styles.time}>{time1}</Text>
				<Text style={styles.time}>{time2}</Text>
			</View>
		</View>
	</View>
);

const History = ({ navigation }) => {
	const renderItem = ({ item }) => (
		<Item
			title1={item.title1}
			title2={item.title2}
			time1={item.time1}
			time2={item.time2}
			image={{ uri: item.uri }}
		/>
	);

	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} title='History' />
			<View style={styles.searchbar}>
				<View style={styles.search}>
					<SearchBar
						round
						clearIcon={{ size: 24 }}
						searchIcon={{ size: 24 }}
						// onChangeText={text => searchFilterFunction(text)}
						// onClear={text => searchFilterFunction('')}
						placeholder='Type Here...'
						// value={search}
					/>
				</View>
				<View style={styles.filter}>
					<Text style={styles.textFilter}>Filter</Text>
					{/* <Icon name='filter' size='24' /> */}
				</View>
			</View>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchbar: {
		marginTop: '17%',
		marginBottom: '3%',
		height: (5 / 100) * height,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	search: {
		width: (80 / 100) * width,
	},
	filter: {
		width: (20 / 100) * width,
	},
	textFilter: {
		fontSize: 16,
	},
	item: {
		height: (13 / 100) * height,
		flex: 1,
		flexDirection: 'column',
		marginTop: '1.5%',
		backgroundColor: '#F2DFC3',
		borderBottomWidth: 1,
		borderBottomColor: '#000',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	text: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: '2%',
		paddingBottom: '0.2%',
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		fontFamily: 'roboto',
		color: '#3C4043',
	},
	contilte: {
		alignItems: 'flex-start',
	},
	contime: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	time: {
		fontSize: 11,
		fontWeight: 'bold',
		color: '#3C4043',
	},
});

export default History;
