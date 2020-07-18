import React from "react";
import { AppLoading } from "expo";
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
	return <Home />;
}
