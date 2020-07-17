import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";

import {
	useFonts,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<View style={styles.container}>
			<Home />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
