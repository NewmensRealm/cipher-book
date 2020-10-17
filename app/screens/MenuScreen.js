import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Screen from '../components/Screen';
import Symbol from '../components/Symbol';
import Modal from 'react-native-modal';
import CipherContainer from '../components/CipherContainer';

export default function MenuScreen({ navigation }) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	return (
		<Screen style={styles.container}>
			<Modal
				isVisible={isModalVisible}
				backdropColor="white"
				onModalHide={() => navigation.navigate('Encode')}
			>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<CipherContainer />

					<Button title="Hide modal" onPress={toggleModal} />
				</View>
			</Modal>
			<Symbol
				title="Encode"
				icon="lock1"
				onPress={() => navigation.navigate('Encode')}
			/>
			<Symbol title="Decode" icon="unlock" onPress={toggleModal} />
			<Symbol icon="infocirlceo" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
