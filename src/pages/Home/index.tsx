import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView,
} from "react-native";
import { theme } from "../../theme";
import { Feather as Icon } from "@expo/vector-icons";
import CardMain from "../../components/CardMain";
import styles from "./styles";
import * as Location from "expo-location";
import api from "../../service/api";
import CardMainStatus from "../../components/CardMainStatus";
import CardDetail from "../../components/CardDetail";

export interface Data {
	city: String;
	uf: String;
	temp: number;
	temp_min: number;
	temp_max: number;
}

interface Details {
	wind: number;
	visibility: number;
	humidity: number;
	clouds: number;
}

const Home = () => {
	const [nameCity, setNameCity] = useState<string>("");
	const [data, setData] = useState<Data>({} as Data);
	const [details, setDetails] = useState<Details>({} as Details);
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
					setDetails({
						wind: res.data.wind.speed,
						visibility: res.data.visibility,
						humidity: res.data.main.humidity,
						clouds: res.data.clouds.all,
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
				setDetails({
					wind: res.data.wind.speed,
					visibility: res.data.visibility,
					humidity: res.data.main.humidity,
					clouds: res.data.clouds.all,
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
							onSubmitEditing={() => handleCity()}
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
			</View>
			<View style={styles.body}>
				<Text style={styles.info}>Informações Adicionais</Text>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 26,
				}}
			>
				<CardDetail
					nameIcon="droplet"
					title="Umidade"
					// description="Quantidade de água existente no ar"
					value={`${details.humidity ? details.humidity : 0}%`}
				/>

				<CardDetail
					nameIcon="wind"
					title="Ventos"
					// description="Velocidade relativa a intensidade do vento"
					value={`${details.wind ? details.wind : 0} km/h`}
				/>

				<CardDetail
					nameIcon="sun"
					title="Visibilidade"
					// description="É a distância máxima na qual um objeto pode ser visto"
					value={`${details.visibility ? details.visibility : 0}km`}
				/>

				<CardDetail
					nameIcon="cloud"
					title="Nuvens"
					// description="Parte do céu encoberto por uma camada de nuvens"
					value={`${details.clouds ? details.clouds : 0}%`}
				/>
			</ScrollView>
		</View>
	);
};

export default Home;
