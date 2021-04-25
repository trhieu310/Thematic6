import { Dimensions } from 'react-native';

const { HEIGHT, WIDTH } = Dimensions.get('screen');

const colors = {
	BLACK: '#000',
	WHITE: '#fff',
	RED: '#ff0000',
	BLUE: '#0000ff',
	YELLOW: '#ffff00',
	CYAN: '#00FFFF',
	ORANGE: '#FFAB00',
	PRIMARY: '#87CEFA',
	LIGHTBLUE: '#81BDF2',
	GOOGLE: '#ED3A47',
	FACEBOOK: '#4267B2',
	LIGHTGRAY: '#BDBDBD',
	GRAY: '#555555',
	YELLOWORANGE: '#F8B712',
	GREEN: '#00FF00'
};
const fontsize = {
	BASE: 13,
	TITLE: 20,
};

const key = {
	API_PLACE: 'AIzaSyA5vqtQ_u9gebimOHGpVpYyCSArQ5qSAaY',
};

const apiCall = {
	API_URL_FIND_FROM_TEXT:
		'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=',
	API_INPUT_TYPE: '&inputtype=textquery',
	API_FIELDS:
		'&fields=photos,formatted_address,name,rating,opening_hours,geometry',
	API_KEY: '&key=',
	API_URL_FIND_FROM_ID:
		'https://maps.googleapis.com/maps/api/place/details/json?placeid=',
};

export { colors, fontsize, HEIGHT, WIDTH, key, apiCall };
