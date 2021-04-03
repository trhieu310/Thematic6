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
	LIGHTBLUE: '#9AC4F8',
	GOOGLE: '#ea4335',
	FACEBOOK: '#3b5998',
};
const fontsize = {
	BASE: 13,
	TITLE: 20,
};

export { colors, fontsize, HEIGHT, WIDTH };
