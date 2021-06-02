import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome5';
import * as theme from 'constants/global';
import { RNCamera } from 'react-native-camera';
import useCameraPermission from 'hook/useCameraPermission';
import Header from 'components/items/heads/Header';
import database from '@react-native-firebase/database';
import { databaseUrl } from '../../../constants/global';

const Scanner = ({ navigation }) => {
	const [cameraFacing, setCameraFacing] = useState('back');
	// const [cameraReady, setCameraReady] = useState(false);
	// const [cameraChanging, setCameraChanging] = useState(false);
	const [barcodeRecognized, setBarcodeRecognized] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	let camera = null;

	const isFocused = useIsFocused();
	const granted = useCameraPermission();

	const handleChangeCameraType = () => {
		switch (cameraFacing) {
			case 'front':
				return setCameraFacing('back');
			case 'back':
				setCameraFacing('front');
		}
	};

	const takePicture = async () => {
		if (camera) {
			const options = { quality: 0.5, base64: true };
			const data = await camera.takePictureAsync(options);
			console.log(data.uri);
		}
	};

	if (!isFocused || !navigation.isFocused) return null;

	if (granted === 'pending') {
		return (
			<View style={styles.container}>
				<Text>Waiting for camera</Text>
			</View>
		);
	}

	if (granted !== true) {
		return (
			<View style={styles.container}>
				<Text>No access to camera</Text>
			</View>
		);
	}

	const LoadingScreen = () => {
		return (
			<View style={styles.layerLoading}>
				<ActivityIndicator size='large' color='#666666' />
				<Text> Loading ... </Text>
			</View>
		);
	};

	const getDataPlaceInfo = barcode => {
		const { bounds, type, data, rawData } = barcode;
		const refUser = databaseUrl.ROOT + databaseUrl.PLACE + data;
		database()
			.ref(refUser)
			.once('value')
			.then(snapshot => {
				setBarcodeRecognized(null);
				if (snapshot.val() !== 'undefined' && snapshot.val() !== null) {
					setIsLoading(true);
					setTimeout(() => {
						setIsLoading(false);
						navigation.navigate('Detail', { item: snapshot.val() });
					}, 500);
				} else {
				}
			});
	};

	const renderBoundingBarcode = () => {
		try {
			const { target, barcodes = [] } = barcodeRecognized;
			return barcodes.map(barcode => {
				const { bounds, type, data, rawData } = barcode;
				// console.warn(barcode);

				if (type !== 'QR_CODE') return null;
				getDataPlaceInfo(barcode);
				// return (
				// 	<View
				// 		style={{
				// 			...styles.boundingBarcode,
				// 			...bounds.size,
				// 			left: bounds.origin.x,
				// 			top: bounds.origin.y,
				// 		}}>
				// 		<Text>{data}</Text>
				// 	</View>
				// );
			});
		} catch (error) {
			return (
				<View
					style={{
						...styles.boundingBarcode,
						bottom: 150,
						left: 80,
					}}>
					<Text
						style={{
							color: '#ffffff',
						}}>
						Not found data for this QR Code
					</Text>
				</View>
			);
		}
	};

	return (
		<View style={styles.container}>
			<Header back navigation={navigation} />
			<View style={[styles.container, styles.backgroundContainer]}>
				<RNCamera
					style={styles.container}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.off}
					ref={ref => (camera = ref)}
					// ratio="16:9"
					// onCameraReady={setCameraReady(true)}
					useNativeZoom
					onGoogleVisionBarcodesDetected={setBarcodeRecognized}
					onTap={(x, y) => {}}
					autoFocusPointOfInterest={{
						x: 0.5,
						y: 0.5,
						autoExposure: true,
					}}
				/>
			</View>
			<View style={styles.main}>
				<View style={styles.centerItem}>
					<Image
						style={styles.focusArea}
						source={require('assets/camera-focus.png')}
					/>
				</View>
			</View>
			{renderBoundingBarcode()}
			{isLoading && <LoadingScreen />}

			<View style={styles.tools}>
				<View style={styles.gridContainer}>
					<View style={styles.gridItem}>
						<View style={styles.centerItem}>
							<Button
								onPress={handleChangeCameraType}
								type='clear'
								icon={
									<Icon
										// disabled={cameraChanging}
										type='font-awesome-5'
										name='sync'
										color={theme.colors.WHITE}
										size={34}
									/>
								}
							/>
						</View>
					</View>
					<View style={styles.gridItem}>
						<View style={[styles.centerItem, styles.buttonIcon]}>
							<Button
								// style={styles.buttonIcon}
								onPress={takePicture}
								type='clear'
								icon={
									<Icon
										type='font-awesome-5'
										name='circle'
										color={theme.colors.WHITE}
										size={80}
										solid
									/>
								}
							/>
						</View>
					</View>
					<View style={styles.gridItem}>
						<View style={[styles.centerItem, styles.buttonIcon]}>
							<Button
								type='clear'
								icon={
									<Icon
										type='font-awesome-5'
										name='folder-open'
										color={theme.colors.WHITE}
										size={34}
									/>
								}
							/>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Scanner;

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
	backgroundContainer: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -1,
	},
	main: {
		width: '100%',
		height: '100%',
		// backgroundColor: theme.colors.LIGHTBLUE,
	},
	tools: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		width: '100%',
		height: '20%',
		backgroundColor: '#00000056',
		color: theme.colors.WHITE,
	},
	gridContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
	},
	gridItem: {
		flexGrow: 1,
	},
	buttonIcon: {
		borderRadius: 50,
		// overflow: "hidden",
	},
	focusArea: {
		// backgroundColor: theme.colors.BLACK,
		width: 300,
		height: 300,
	},
	icon: {
		color: theme.colors.WHITE,
	},
	centerItem: {
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
	},
	boundingBarcode: {
		position: 'absolute',
		backgroundColor: '#005affa3',
		borderRadius: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	layerLoading: {
		position: 'absolute',
		display: 'flex',
		backgroundColor: 'rgba(255, 255, 255, .6)',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
