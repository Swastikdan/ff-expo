import "@/global.css";
// import { useMemo } from "react";
import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import { useColorScheme } from "nativewind";
// import { ThemeToggle } from "@/components/theme-toggle";
import { Providers } from "@/components/providers";
// import { useEffect } from "react";
import { Text } from "@/components/ui/text";
// import { Image, View } from "react-native";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";
export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

export default function RootLayout() {
	// const { colorScheme } = useColorScheme();

	// useEffect(() => {
	// 	if (loaded || error || colorScheme !== null) SplashScreen.hideAsync();
	// }, [loaded, error, colorScheme]);

	const theme = NAV_THEME["light"];

	return (
		<Providers>
			<StatusBar style={"dark"} animated backgroundColor="white" />
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="(tabs)"
					options={{
						headerTitle: () => (
							<Text className="text-2xl font-bold">Film Fanatic</Text>
						),
					}}
				/>

				<Stack.Screen
					name="disclaimer"
					options={{
						headerTitle: () => (
							<Text className="text-2xl font-bold">Disclaimer</Text>
						),
						headerRight: () => "",
					}}
				/>
				<Stack.Screen
					name="+not-found"
					options={{
						headerTitle: () => (
							<Text className="text-2xl font-bold">Not Found</Text>
						),
						headerRight: () => "",
					}}
				/>
			</Stack>
			<PortalHost />
		</Providers>
	);
}
