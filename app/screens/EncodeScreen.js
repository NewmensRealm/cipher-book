import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import Banner from '../components/Banner';
import GestureRecognizer from 'react-native-swipe-gestures';

const ciferTypes = [
	{
		id: 1,
		name: "Caesar's cipher",
		color: '#4287f5',
		icon: 'lock',
	},
	{ id: 2, name: 'Monoalphabetic cipher', color: '#42f57e', icon: 'check' },
	{ id: 3, name: 'Transposition cipher', color: '#f59342', icon: 'close' },
];

export default function EncodeScreen() {
	const [ciferType, setCiferType] = useState({
		id: 1,
		name: "Caesar's cipher",
		color: '#4287f5',
		icon: 'lock',
	});
	const [gestureName, setGestureName] = useState('none');

	const onSwipeLeft = (gestureState) => {
		const cifers = [...ciferTypes];
		const index = ciferType.id;
		const cifer = index < cifers.length ? cifers[index] : cifers[0];

		setCiferType(cifer);
	};
	const onSwipeRight = (gestureState) => {
		const cifers = [...ciferTypes];
		const index = ciferType.id - 1;
		const cifer = index > 0 ? cifers[index - 1] : cifers[cifers.length - 1];

		setCiferType(cifer);
	};

	const handlePress = () => {
		console.log('Its working');
	};

	return (
		<GestureRecognizer
			onSwipeLeft={(state) => onSwipeLeft(state)}
			onSwipeRight={(state) => onSwipeRight(state)}
			config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80 }}
			style={styles.container}
		>
			<Banner style={styles.banner} title={ciferType.name} />
			<Icon
				style={styles.icon}
				icon={ciferType.icon}
				color={ciferType.color}
				onPress={handlePress}
			/>
		</GestureRecognizer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: 'yellow',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		height: 300,
		width: 300,
		borderRadius: 150,
	},
	banner: {
		marginBottom: 50,
	},
});
