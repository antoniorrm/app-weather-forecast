import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const search = require("../../../assets/no-maps-and-location.png");
const errorIcon = require("../../../assets/maps-and-location.png");

interface Props {
	error: Boolean;
}

const CardMainStatus = (props: Props) => {
	const { error } = props;
	return (
		<View style={styles.contentCard}>
			<Image
				style={{ width: 98, height: 100 }}
				source={error ? errorIcon : search}
				resizeMode="contain"
			/>
			{error ? (
				<View>
					<Text style={styles.title}>Opps.</Text>
					<Text style={styles.subtitle}>Nenhuma resultado</Text>
					<Text style={styles.subtitle}>encontrada para a cidade buscada.</Text>
				</View>
			) : (
				<View>
					<Text style={styles.title}>Pesquise.</Text>
					<Text style={styles.subtitle}>Pesquise pelo nome</Text>
					<Text style={styles.subtitle}>da cidade para ver detalhes.</Text>
				</View>
			)}
		</View>
	);
};

export default CardMainStatus;
