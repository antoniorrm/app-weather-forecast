import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
	contentCard: {
		backgroundColor: theme.colors.white500,
		padding: 36,
		borderRadius: 12,
	},

	nameCity: {
		fontFamily: theme.fontFamily.bold,
		fontSize: theme.fontSize.h1,
		color: theme.colors.black400,
	},

	data: {
		fontFamily: theme.fontFamily.medium,
		fontSize: theme.fontSize.h5,
		color: theme.colors.orange500,
	},

	tem: {
		marginTop: 18,
		marginBottom: 24,
		fontFamily: theme.fontFamily.medium,
		fontSize: theme.fontSize.big,
		color: theme.colors.black400,
	},

	temps: {
		marginLeft: 4,
		fontFamily: theme.fontFamily.regular,
		fontSize: theme.fontSize.h4,
		color: theme.colors.gray500,
	},

	inline: { flexDirection: "row", alignItems: "center" },
});

export default styles;
