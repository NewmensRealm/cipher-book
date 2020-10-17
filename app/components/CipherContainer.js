import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Banner from './Banner';

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

export default function CipherContainer() {
	return (
		<View>
			<FlatList
				data={ciferTypes}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => {
					<View style={{ backgroundColor: 'yellow' }}>
						<Banner title={item.name} />;
					</View>;
				}}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({});
