import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Icon({ style, icon, color, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.icon, { backgroundColor: color }, style]}>
				<AntDesign name={icon} size={150} color="white" />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
		width: 80,
		borderRadius: 40,
	},
});
