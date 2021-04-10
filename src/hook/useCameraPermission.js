import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, ToastAndroid } from 'react-native';

const showToast = mgs => {
	ToastAndroid.showWithGravity(mgs, ToastAndroid.SHORT);
};

export default function useCameraPermission() {
	const [cameraPermission, setCameraPermission] = useState('pending');

	useEffect(async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: 'Cool Photo App Camera Permission',
					message:
						'Cool Photo App needs access to your camera ' +
						'so you can take awesome pictures.',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);

			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('You can use the camera');
				setCameraPermission(true);
			} else {
				console.log('Camera permission denied');
				setCameraPermission(false);
			}
		} catch (err) {
			console.warn(err);
			setCameraPermission('error');
		}
	}, []);

	return cameraPermission;
}
