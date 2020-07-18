import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
	contentCard: {
		alignItems: "center",
		justifyContent: "space-around",
		height: 290,
		backgroundColor: theme.colors.white500,
		padding: 36,
		borderRadius: 12,
	},

	title: {
		textAlign: "center",
		fontFamily: theme.fontFamily.semiBold,
		fontSize: theme.fontSize.h2,
		color: theme.colors.black500,
		marginBottom: 16,
	},

	subtitle: {
		textAlign: "center",
		fontFamily: theme.fontFamily.regular,
		fontSize: theme.fontSize.h4,
		color: theme.colors.gray500,
	},
});

export default styles;
