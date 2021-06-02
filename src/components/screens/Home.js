import Header from 'components/items/heads/Header';
import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	ImageBackground,
	Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fontsize } from 'constants/global';
import { TouchableRipple } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native';

const ButtonRipple = ({ style, icon, onPress, children, ...props }) => {
	return (
		<View style={styles.buttonBouding}>
			<View style={styles.buttonBorder}>
				<View style={styles.button}>
					<TouchableRipple
						style={{ ...styles.buttonRipple, ...style }}
						rippleColor='#0000001a'
						onPress={onPress}>
						<View style={styles.buttonContainer}>
							{icon}
							{children}
						</View>
					</TouchableRipple>
				</View>
			</View>
		</View>
	);
};

const CardRipple = ({ image, children, title, onPress, ...props }) => {
	return (
		<View style={styles.cardStyle}>
			<TouchableRipple rippleColor='#0000001a' onPress={onPress}>
				<View style={[styles.fillFullWidth, styles.cardBouding]}>
					<View style={[styles.grid]}>
						<View
							style={[styles.gridItem, styles.cardItemBounding]}>
							{image}
						</View>
						<View
							style={[styles.gridItem, styles.cardItemBounding]}>
							{children}
						</View>
					</View>
					<View style={[styles.fillFullWidth, styles.cardTitle]}>
						{title}
					</View>
				</View>
			</TouchableRipple>
		</View>
	);
};

const Home = ({ navigation }) => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	const onAuthStateChanged = user => {
		setUser(user);
		if (initializing) setInitializing(false);
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) return null;
	// if (!user) {
	// 	return <View>{navigation.navigate('Login')}</View>;
	// } else
		return (
			<SafeAreaView style={styles.container}>
				<Header navigation={navigation} title='Home' />
				<ScrollView>
					<View style={styles.wrapperContent}>
						<View styles={styles.homeImage}>
							<Image
								source={require('assets/images/home_bg.jpg')}
								style={styles.homeBg}
							/>
						</View>
						<View style={styles.homePage}>
							<View style={styles.fillFullWidth}>
								<View style={styles.title}>
									<View style={styles.titleIcon}>
										<Icon
											name='check-circle'
											size={26}
											color={colors.SUCCESS}
										/>
									</View>
									<View style={styles.viewHeader}>
										<Text style={styles.header}>
											Suggestion
										</Text>
									</View>
								</View>
								<View style={styles.fillFullWidth}>
									<View
										style={[
											styles.gridContainer,
											styles.fillFullWidth,
										]}>
										<View
											style={[
												styles.grid,
												styles.fillFullWidth,
											]}>
											<View style={styles.gridItem}>
												<ButtonRipple
													onPress={() => {}}
													icon={
														<Icon
															name='map-marker-alt'
															style='regular'
															size={34}
															color={
																colors.SUCCESS
															}
														/>
													}>
													<Text>Địa điểm đẹp</Text>
												</ButtonRipple>
											</View>
											<View style={styles.gridItem}>
												<ButtonRipple
													onPress={() => {}}
													icon={
														<Icon
															name='hamburger'
															style='regular'
															size={34}
															color={
																colors.FACEBOOK
															}
														/>
													}>
													<Text>Món ăn ngon</Text>
												</ButtonRipple>
											</View>
											<View style={styles.gridItem}>
												<ButtonRipple
													onPress={() => {}}
													icon={
														<Icon
															name='hotel'
															style='regular'
															size={34}
															color={
																colors.ORANGE
															}
														/>
													}>
													<Text>
														Nhà nghỉ sang chảnh
													</Text>
												</ButtonRipple>
											</View>
										</View>
									</View>
								</View>
							</View>
							<View style={styles.py4}>
								<View style={styles.title}>
									<View style={styles.titleIcon}>
										<Icon
											name='map-marked-alt'
											size={26}
											color={colors.SUCCESS}
										/>
									</View>
									<View style={styles.viewHeader}>
										<Text style={styles.header}>
											History
										</Text>
									</View>
								</View>

								<View style={styles.py4}>
									<View style={styles.py4}>
										<CardRipple
											image={
												<Image
													style={[
														styles.fillFullWidth,
														{ height: 100 },
													]}
													source={require('assets/images/home_bg.jpg')}></Image>
											}
											title={
												<Text style={styles.textTitle}>
													Vịnh Hạ Long - Quảng Ninh
												</Text>
											}
											onPress={() => {}}>
											<View style={styles.mynev4}>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='clock'
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text style={styles.header}>
														16:00:23
													</Text>
												</View>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='calendar-alt'
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text>23/06/2020</Text>
												</View>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='map-marker'
														solid
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text>Quảng Ninh</Text>
												</View>
											</View>
										</CardRipple>
									</View>
									<View style={styles.py4}>
										<CardRipple
											image={
												<Image
													style={[
														styles.fillFullWidth,
														{ height: 100 },
													]}
													source={require('assets/images/home_bg.jpg')}></Image>
											}
											title={
												<Text style={styles.textTitle}>
													Vịnh Hạ Long - Quảng Ninh
												</Text>
											}
											onPress={() => {}}>
											<View style={styles.mynev4}>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='clock'
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text style={styles.header}>
														16:00:23
													</Text>
												</View>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='calendar-alt'
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text>23/06/2020</Text>
												</View>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='map-marker'
														solid
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text>Quảng Ninh</Text>
												</View>
											</View>
										</CardRipple>
									</View>
									<View style={styles.py4}>
										<CardRipple
											image={
												<Image
													style={[
														styles.fillFullWidth,
														{ height: 100 },
													]}
													source={require('assets/images/home_bg.jpg')}></Image>
											}
											title={
												<Text style={styles.textTitle}>
													Vịnh Hạ Long - Quảng Ninh
												</Text>
											}
											onPress={() => {}}>
											<View style={styles.mynev4}>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='clock'
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text style={styles.header}>
														16:00:23
													</Text>
												</View>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='calendar-alt'
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text>23/06/2020</Text>
												</View>
												<View
													style={[
														styles.inlineFlex,
														styles.py4,
													]}>
													<Icon
														style={styles.pr8}
														name='map-marker'
														solid
														size={
															fontsize.LITTLE_BIG_TITLE
														}
														color={colors.SUCCESS}
													/>
													<Text>Quảng Ninh</Text>
												</View>
											</View>
										</CardRipple>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							height: 90,
							backgroundColor: colors.WHITE,
						}}></View>
				</ScrollView>
			</SafeAreaView>
		);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapperContent: {
		flex: 1,
		backgroundColor: '#fff',
		// overflow: 'scroll',
	},
	fillFullWidth: { width: '100%' },
	homeImage: {
		// flex: 1,
	},
	homeBg: {
		// flex: 1,
		width: '100%',
		height: 230,
		// maxHeight: 230,
	},
	homePage: {
		// flex: 1,
		paddingHorizontal: 12,
		paddingVertical: 8,
		overflow: 'scroll',
	},
	title: {
		display: 'flex',
		flexWrap: 'nowrap',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 5
	},
	titleIcon: {
		// padding: 8,
	},
	viewHeader: {
		marginLeft: 5
	},
	header: {
		fontSize: fontsize.TITLE,
	},
	gridContainer: {
		marginRight: -4,
	},
	grid: {
		// flex: 1,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		position: 'relative',
	},
	gridItem: {
		flexBasis: '50%',
		// width: '50%',
		// flex: 1,
	},
	buttonBouding: { padding: 4, height: 100 },

	buttonBorder: {
		borderWidth: 1,
		borderColor: '#f1f1f1',
		borderRadius: 8,
		borderStyle: 'solid',
		shadowOffset: { height: 5, width: 5 },
		shadowColor: 'black',
		shadowOpacity: 0.5,
		shadowRadius: 10,
		elevation: 10,
		overflow: 'hidden',
		// padding: 1,
	},
	button: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		borderRadius: 0,
	},
	buttonRipple: {
		width: '100%',
		height: '100%',
		// borderRadius: 50,
	},
	buttonContainer: {
		display: 'flex',
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		padding: 8,
		justifyContent: 'space-between',
		alignItems: 'stretch',
		// borderRadius: 50,
	},
	buttonText: {
		fontSize: 16,
	},
	inlineFlex: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	pl4: {
		paddingLeft: 4,
	},
	pr8: {
		paddingRight: 8,
	},
	centerText: {
		textAlign: 'center',
	},
	cardBouding: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 16 },
	cardItemBounding: { paddingHorizontal: 4 },
	cardTitle: {
		paddingTop: 8,
	},
	textTitle: {
		fontSize: fontsize.TITLE,
	},
	header: {
		fontSize: fontsize.BASE,
	},
	py4: {
		paddingVertical: 4,
	},
	mynev4: {
		marginVertical: -4,
	},
	cardStyle: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#f1f1f1',
		borderRadius: 8,
		backgroundColor: 'white',
		overflow: 'hidden',
		shadowColor: 'black',
		shadowOffset: {
			height: 1,
			width: 15,
		},
		shadowOpacity: 1,
		shadowRadius: 20,
		elevation: 8,
	},
});
