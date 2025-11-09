import { Text } from "@/components/ui/text";
import { View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export function TopNav() {
	return (
		<View className="sticky top-0 mx-auto flex w-full flex-col items-center border-border border-b-2 bg-primary-900 transition-transform duration-300 h-[200px]">
			<View className="flex w-full max-w-screen-xl items-center justify-between p-3">
				<Link href="/" className="flex items-center gap-3">
					<Image
						style={styles.tinyLogo}
						source={{
							uri: "https://reactnative.dev/img/tiny_logo.png",
						}}
					/>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	tinyLogo: {
		width: 50,
		height: 50,
	},
	logo: {
		width: 66,
		height: 58,
	},
});
