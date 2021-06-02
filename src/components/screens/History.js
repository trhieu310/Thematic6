import React, { useState, useEffect } from 'react';
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
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { databaseUrl } from '../../constants/global';
import firestore from '@react-native-firebase/firestore';

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
	const [user, setUser] = useState(auth().currentUser);
	const [history, setHistory] = useState([]);
	const [listHist, setListHist] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const checkUser = async () => {
			await auth().onAuthStateChanged(user => {
				setUser(user);
			});
		};

		const getHistory = async () => {
			console.log('GET HIS');
			if (user) {
				let temp = [];
				const ref = databaseUrl.ROOT + databaseUrl.HISTORY + user.uid;
				await database()
					.ref(ref)
					.once('value')
					.then(snapshot => {
						snapshot.forEach(e => {
							let te = e.toJSON();
							temp.push({
								placeId: te.placeId,
								time: te.time,
							});
						});
					});
				setListHist(temp);
			}
		};

		const getPlace = async () => {
			setIsLoading(true);
			const ref = databaseUrl.ROOT + databaseUrl.PLACE;
			let te = [];
			if (listHist.length > 0) {
				console.log('GET PLACE');
				listHist.forEach(e => {
					const d = database()
						.ref(ref + e.placeId)
						.on('value' ,snapshot => {
							const ts = snapshot.toJSON();
							console.log(ts);
							te.push({
								id: e.placeId + e.time,
								name: ts.name,
								city: ts.address.city,
								time1: e.time.split(' ')[1],
								time2: e.time.split(' ')[0],
								uri: ts.uri,
							});
						});
				});
				console.log(te);
				setHistory(te);
			}
			setIsLoading(false);
		};

		checkUser();
		getHistory();
		getPlace();
		return history;
	}, []);

	const RenderEmpty = () => {
		return (
			<View style={styles.emptyWrapper}>
				<Image
					style={styles.emptyImage}
					source={require('../../../assets/unnamed.jpeg')}
				/>
				<Text style={{ paddingTop: 10, fontSize: 18 }}>
					User not log in.
				</Text>
			</View>
		);
	};

	const renderItem = ({ item }) => (
		<Item
			title1={item.name}
			title2={item.city}
			time1={item.time1}
			time2={item.time2}
			image={{ uri: item.uri }}
		/>
	);

	if (isLoading) return null;
	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} title='History' />
			{user ? (
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
			) : (
				<RenderEmpty />
			)}
			{user && (
				<FlatList
					data={isLoading ? null : history}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
			)}
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
	emptyWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyImage: {
		height: 200,
		width: width - 50,
	},
});

export default History;
