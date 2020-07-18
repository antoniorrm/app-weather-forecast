import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, TextInput } from "react-native";
import { theme } from "../../theme";
import { Feather as Icon } from "@expo/vector-icons";
import CardMain from "../../components/CardMain";
import styles from "./styles";

const Home = () => {
	const [nameCity, setNameCity] = useState("");

	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={theme.colors.orange500}
				barStyle="light-content"
			/>
			<View style={styles.cardHeader}>
				<View style={styles.header}>
					<Icon name="refresh-ccw" size={22} color={theme.colors.white500} />
					<Text style={styles.headerTitle}>Weather Forecast</Text>
					<Icon name="toggle-left" size={22} color={theme.colors.white500} />
				</View>
				{/* Input search */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 32,
					}}
				>
					<View style={{ width: "78%" }}>
						<Icon
							style={styles.iconInput}
							name="search"
							size={22}
							color={theme.colors.white500}
						/>
						<TextInput
							placeholder="Nome da cidade"
							placeholderTextColor={theme.colors.white500}
							autoCapitalize="words"
							style={styles.input}
							onChangeText={(value) => setNameCity(value)}
							value={nameCity}
						/>
					</View>

					<View style={{ marginLeft: "4%", width: "18%" }}>
						<Icon
							style={styles.searchBtn}
							name="navigation"
							size={22}
							color={theme.colors.white500}
						/>
					</View>
				</View>
			</View>

			<View style={[styles.body, { marginTop: -132 }]}>
				<CardMain />
			</View>
		</View>
	);
};

export default Home;
