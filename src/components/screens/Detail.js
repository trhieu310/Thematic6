import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Image,
	Dimensions,
	Platform,
	TouchableOpacity,
} from 'react-native';
import Header from '../items/heads/Header';
import { colors } from '../../constants/global';
import { AirbnbRating, Rating } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Icon } from 'react-native-elements';

const defaultImage = require('../../../assets/images/home_bg.jpg');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Detail = ({ navigation, image }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Header navigation={navigation} back title='Vinh Ha Long' />
			<View style={styles.contentHeader}>
				<View style={styles.imageView}>
					<Image
						style={styles.image}
						source={image ? imgae : defaultImage}
					/>
				</View>
				<View style={styles.headerView}>
					<Text style={styles.title}>Vinh Ha Long</Text>
					<View style={styles.feedbackView}>
						<Text>4,6 </Text>
						<Rating
							imageSize={18}
							readonly
							startingValue={4.6}
							style={styles.rating}
						/>
						<Text>(4,654)</Text>
					</View>
					<Text style={styles.address}>
						Thanh pho Ha Long, Quang Ninh
					</Text>
				</View>
			</View>
			<ScrollView>
				<View style={styles.ratingView}>
					<View style={styles.ratingDetail}>
						<Text style={styles.ratingRatio}>4,6</Text>
						<View style={styles.ratingBounder}>
							<Rating
								imageSize={14}
								readonly
								startingValue={4.6}
								style={styles.ratingProgress}
							/>
						</View>

						<Text style={styles.ratingCard}>(4,654)</Text>
					</View>
					<View style={styles.ratingProgressView}>
						<View style={styles.progressTray}>
							<Progress.Bar
								progress={1}
								color={colors.YELLOWORANGE}
								width={220}
								style={styles.progressItem}
							/>
						</View>
						<View style={styles.progressTray}>
							<Progress.Bar
								progress={0.35}
								color={colors.YELLOWORANGE}
								width={220}
								style={styles.progressItem}
							/>
						</View>
						<View style={styles.progressTray}>
							<Progress.Bar
								progress={0.21}
								color={colors.YELLOWORANGE}
								width={220}
								style={styles.progressItem}
							/>
						</View>
						<View style={styles.progressTray}>
							<Progress.Bar
								progress={0.12}
								color={colors.YELLOWORANGE}
								width={220}
								style={styles.progressItem}
							/>
						</View>
						<View style={styles.progressTray}>
							<Progress.Bar
								progress={0.03}
								color={colors.YELLOWORANGE}
								width={220}
								style={styles.progressItem}
							/>
						</View>
					</View>
				</View>
				<View style={styles.descriptionView}>
					<Text style={styles.descriptionText}>
						Nhiều đảo đá vôi cây cối um tùm nằm dọc điểm du lịch nổi
						bật với hoạt động lặn, leo núi đá vôi và đi bộ đường dài
					</Text>
				</View>
				<View style={styles.pictureView}>
					<View style={styles.locationView}>
						<Icon
							size={22}
							name='map-marked-alt'
							type='font-awesome-5'
							color='#98ccfd'
						/>
						<Text style={styles.locationText}>
							Thành phố Hạ Long, Quảng Ninh
						</Text>
					</View>
					<View style={styles.locationView}>
						<Icon
							size={22}
							name='ruler-horizontal'
							type='font-awesome-5'
							color='#98ccfd'
						/>
						<Text style={styles.locationText}>Do khoang cach</Text>
					</View>
					<View style={styles.pictureImageView}>
						<Image
							source={defaultImage}
							style={styles.pictureImage}
						/>
						<Text style={styles.pictureImageText}>Anh</Text>
					</View>
					<TouchableOpacity style={styles.locationView}>
						<Icon
							size={22}
							name='camera'
							type='font-awesome-5'
							color='#98ccfd'
						/>
						<Text style={styles.locationText}>Them anh</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.rateAndFeedbackView}>
					<Text style={styles.rateAndFeedbackTitle}>
						Xếp hạng và đánh giá
					</Text>
					<Text style={styles.rateAndFeedbackDes}>
						Chia sẻ trải nghiệm của bạn để giúp đỡ người khác
					</Text>
					<View style={styles.rafSelf}>
						<Icon
							style={styles.iconRafSelf}
							size={25}
							name='star-half-alt'
							type='font-awesome-5'
							color='#98ccfd'
						/>
						<Rating
							imageSize={30}
							startingValue={0}
							style={styles.rafSelfRating}
						/>
					</View>
				</View>
				<View style={styles.detailView}>
					<Text style={styles.detailTitle}>Vịnh hạ long</Text>
					<Text style={styles.detailContent}>
						Vịnh hạ long là một vịnh nhỏ thuộc phần bờ tây vịnh Bắc
						Bộ tại khu vực biển Đông Bắc Việt Nam, bao gồm vùng biển
						đảo của thành phố Hạ Long thuộc tỉnh Quảng Ninh.
					</Text>
					<View style={styles.detailRowView}>
						<Text style={styles.detailStartText}>Dien tich:</Text>
						<Text style={styles.detailEndText}>1553 km3</Text>
					</View>
					<View style={styles.detailRowView}>
						<Text style={styles.detailStartText}>Do cao:</Text>
						<Text style={styles.detailEndText}>100 m</Text>
					</View>
					<View style={styles.locationView}>
						<Icon
							size={22}
							name='hotel'
							type='font-awesome-5'
							color='#98ccfd'
						/>
						<Text style={styles.locationText}>
							Khách sạn 3* trung bình 788.608đ, Khách sạn 5* trung
							bình 1.333.996đ
						</Text>
					</View>
				</View>
				<View
					style={{
						height: Platform.OS === 'ios' ? 125 : 100,
					}}></View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Detail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.WHITE,
	},
	contentHeader: {
		flex: 1,
		minHeight: windowHeight > 640 ? 345 : 290,
		maxHeight: windowHeight > 640 ? 345 : 290,
		height: windowHeight > 640 ? 345 : 290,
		shadowColor: '#000',
		shadowOffset: { width: -6, height: 2 },
		shadowOpacity: 0.2,
		marginBottom: 2,
		elevation: 2,
	},
	imageView: {
		flex: 1,
		minHeight: windowHeight > 640 ? 255 : 200,
		maxHeight: windowHeight > 640 ? 255 : 200,
		height: windowHeight > 640 ? 255 : 200,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	headerView: {
		backgroundColor: colors.WHITE,
		minHeight: 90,
		maxHeight: 90,
		height: 90,
		paddingHorizontal: 10,
		paddingVertical: 8,
	},
	title: {
		fontSize: 18,
		fontWeight: '500',
	},
	feedbackView: {
		flex: 1,
		minHeight: 30,
		maxHeight: 30,
		height: 30,
		flexDirection: 'row',
	},
	rating: {
		marginHorizontal: 4,
		backgroundColor: 'rgba(255, 255, 255, .025)',
	},
	ratingProgress: {
		backgroundColor: 'rgba(255, 255, 255, .025)',
		padding: 0,
		margin: 0,
	},
	address: {
		fontSize: 14,
		fontWeight: '400',
	},
	ratingView: {
		flex: 1,
		minHeight: 115,
		maxHeight: 115,
		height: 115,
		flexDirection: 'row',
		backgroundColor: colors.WHITE,
		shadowColor: '#000',
		shadowOffset: { width: -6, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
	},
	ratingDetail: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	ratingProgressView: {
		flex: 7,
		paddingVertical: 10,
	},
	ratingBounder: {
		flex: 1,
		maxHeight: 25,
		minHeight: 25,
		height: 25,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 3,
	},
	ratingRatio: {
		fontSize: 36,
	},
	ratingCard: {
		fontSize: 16,
		color: colors.LIGHTGRAY,
	},
	progressTray: {
		flex: 1,
		flexDirection: 'column',
		paddingEnd: 20,
		height: 20,
		paddingVertical: 7,
	},
	progressItem: {
		width: 220,
	},
	descriptionView: {
		flex: 1,
		maxHeight: 50,
		minHeight: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.WHITE,
	},
	descriptionText: {
		fontSize: 13,
		textAlign: 'center',
		paddingHorizontal: 1,
	},
	pictureView: {
		flex: 1,
		maxHeight: 225,
		minHeight: 225,
		height: 225,
		paddingHorizontal: 7,
		shadowColor: '#000',
		shadowOffset: { width: -6, height: 2 },
		shadowOpacity: 0.5,
		elevation: 1,
	},
	locationView: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 36,
		minHeight: 36,
		height: 36,
		alignItems: 'center',
	},
	locationText: {
		paddingStart: 7,
	},
	pictureImageView: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 100,
		minHeight: 100,
		height: 100,
		marginVertical: 7,
	},
	pictureImage: {
		flex: 1,
		maxHeight: 100,
		minHeight: 100,
		height: 100,
		borderRadius: 10,
	},
	pictureImageText: {
		position: 'absolute',
		left: 7,
		bottom: 5,
		color: colors.WHITE,
		fontSize: 18,
	},
	rateAndFeedbackView: {
		flex: 1,
		maxHeight: 100,
		minHeight: 100,
		height: 100,
		paddingHorizontal: 7,
		paddingVertical: 7,
		justifyContent: 'center',
	},
	rateAndFeedbackTitle: {
		fontSize: 14,
		color: colors.BLACK,
	},
	rateAndFeedbackDes: {
		fontSize: 14,
		color: colors.GRAY,
		paddingBottom: 5,
	},
	rafSelf: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconRafSelf: {
		paddingHorizontal: 12,
	},
	rafSelfRating: {
		flex: 5,
		justifyContent: 'center',
	},
	detailView: {
		flex: 1,
		paddingHorizontal: 7,
		paddingVertical: 7,
	},
	detailTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingVertical: 5,
	},
	detailContent: {
		paddingVertical: 5,
		textAlign: 'justify',
	},
	detailRowView: {
		flex: 1,
		flexDirection: 'row',
	},
	detailStartText: {
		fontWeight: 'bold',
	},
	detailEndText: {
		paddingStart: 7,
	},
});
