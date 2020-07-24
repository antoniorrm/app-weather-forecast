import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { Platform } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.gray100,
	},

	body: {
		marginBottom: 24,
		marginLeft: 24,
		marginRight: 24,
	},

	cardHeader: {
		height: 290,
		padding: 24,
		backgroundColor: theme.colors.orange500,
		zIndex: 0,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},

	headerTitle: {
		textAlign: "center",
		color: theme.colors.white500,
		fontFamily: theme.fontFamily.semiBold,
		fontSize: theme.fontSize.h3,
	},

	iconInput: {
		position: "absolute",
		top: "30%",
		left: 24,
	},

	input: {
		fontFamily: theme.fontFamily.semiBold,
		fontSize: theme.fontSize.h4,
		color: theme.colors.white500,
		paddingLeft: 64,
		height: 64,
		borderRadius: 12,
		backgroundColor: theme.colors.white500 + "16",
	},

	searchBtn: {
		height: 64,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		backgroundColor: theme.colors.white500 + "16",
	},
	info: {
		textAlign: "center",
		color: theme.colors.gray500,
		fontFamily: theme.fontFamily.semiBold,
		fontSize: theme.fontSize.h4,
		marginBottom: 16,
	},
});

export default styles;
