import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, ToastAndroid } from 'react-native';

const showToast = mgs => {
	ToastAndroid.showWithGravity(mgs, ToastAndroid.SHORT);
};

export default function useLocationPermission() {
	const [locationPermission, setLocationPermission] = useState('pending');

	useEffect(async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: 'Cool Photo App Location Permission',
					message:
						'Cool Photo App needs access to your location ' +
						'so you can take awesome pictures.',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);

			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('You can use the location');
				setLocationPermission(true);
			} else {
				console.log('Location permission denied');
				setLocationPermission(false);
			}
		} catch (err) {
			console.warn(err);
			setLocationPermission('error');
		}
	}, []);

	return locationPermission;
}
