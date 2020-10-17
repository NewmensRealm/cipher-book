import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

export default function Screen({ children, style }) {
	return (
		<SafeAreaView style={[styles.screen, style]}>
			<View style={style}>{children}</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: 'white',
	},
});
