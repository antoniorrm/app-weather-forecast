import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
	contentCard: {
		height: 160,
		width: 160,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: theme.colors.white500,
		borderRadius: 12,
		marginRight: 12,
		padding: 12,
	},

	title: {
		textAlign: "center",
		fontFamily: theme.fontFamily.medium,
		fontSize: theme.fontSize.h4,
		color: theme.colors.black400,
		marginBottom: 2,
	},

	value: {
		textAlign: "center",
		fontFamily: theme.fontFamily.bold,
		fontSize: theme.fontSize.h1,
		color: theme.colors.black400,
	},

	// description: {
	// 	fontFamily: theme.fontFamily.regular,
	// 	fontSize: theme.fontSize.h5,
	// 	color: theme.colors.gray500,
	// },

	inline: { flexDirection: "row", alignItems: "center" },
});

export default styles;
