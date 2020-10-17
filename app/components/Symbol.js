import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function symbol({ icon, title, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<AntDesign name={icon} size={50} />
					{title && <Text>{title}</Text>}
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 25,
	},
});
