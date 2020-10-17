import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Banner({ title, style }) {
	return <Text style={[styles.text, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
	text: {
		color: 'red',
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'monospace',
		textAlign: 'center',
	},
});
