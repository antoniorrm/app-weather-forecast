import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";
import { Feather as Icon } from "@expo/vector-icons";
import CardMain from "../../components/CardMain";
import styles from "./styles";
import * as Location from "expo-location";
import api from "../../service/api";
import CardMainStatus from "../../components/CardMainStatus";

export interface Data {
	city: String;
	uf: String;
	temp: number;
	temp_min: number;
	temp_max: number;
}

const Home = () => {
	const [nameCity, setNameCity] = useState<string>("");
	const [data, setData] = useState<Data>({} as Data);
	const [error, setError] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);

	useEffect(() => {
		const loadPosition = async () => {
			setLoading(true);
			const { status } = await Location.requestPermissionsAsync();

			if (status !== "granted") {
				setData({} as Data);

				return;
			}
			const location = await Location.getCurrentPositionAsync();

			const { latitude, longitude } = location.coords;
			await api
				.get(
					`?appid=c02f8825e0518a20f9e3e27a69ca5263&units=metric&lat=${latitude}&lon=${longitude}`
				)
				.then((res) => {
					setData({
						city: res.data.name,
						uf: res.data.sys.country,
						temp: res.data.main.temp,
						temp_min: res.data.main.temp_min,
						temp_max: res.data.main.temp_max,
					});
					return setLoading(false);
				});
		};
		if (nameCity === "") {
			setError(false);
			loadPosition();
		}
	}, [nameCity]);

	async function handleCity() {
		setLoading(true);
		await api
			.get(`?appid=c02f8825e0518a20f9e3e27a69ca5263&units=metric&q=${nameCity}`)
			.then((res) => {
				setError(false);
				setData({
					city: res.data.name,
					uf: res.data.sys.country,
					temp: res.data.main.temp,
					temp_min: res.data.main.temp_min,
					temp_max: res.data.main.temp_max,
				});
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
				setError(true);
				setData({} as Data);
			});
	}

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
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => handleCity()}
							style={styles.searchBtn}
						>
							{loading ? (
								<ActivityIndicator size="small" color={theme.colors.white500} />
							) : (
								<Icon name="navigation" size={22} color={theme.colors.white500} />
							)}
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={[styles.body, { marginTop: -132 }]}>
				{data.uf?.length > 0 ? (
					<CardMain data={data} />
				) : (
					<CardMainStatus error={error} />
				)}
				<Text>Informações Adicionais</Text>
			</View>
		</View>
	);
};

export default Home;
