import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
	contentCard: {
		height: 120,
		justifyContent: "space-around",
		backgroundColor: theme.colors.orange500,
		padding: 36,
		borderRadius: 12,
	},

	title: {
		textAlign: "left",
		fontFamily: theme.fontFamily.semiBold,
		fontSize: theme.fontSize.h2,
		color: theme.colors.white500,
		marginBottom: 12,
	},

	text: {
		textAlign: "left",
		fontFamily: theme.fontFamily.semiBold,
		fontSize: theme.fontSize.h4,
		color: theme.colors.white500 + "80",
	},

	img: {
		position: "absolute",
		top: 2,
		right: 0,
		width: 98,
		height: 100,
	},
});

export default styles;
