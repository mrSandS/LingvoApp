import {
	StyleSheet,
} from 'react-native';

export default StyleSheet.create({
	rowSpaceBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	rowSpaceAround: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	rowLeft: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	rowCenter: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	rowRight: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	rowCenterTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
	},
	columnStart: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	columnCenter: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	columnEnd: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
});