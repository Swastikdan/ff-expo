import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback } from "react";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

/**
 * +not-found.tsx will be picked automatically by Expo Router for unknown routes.
 * Keep layout simple, clear, and on-brand. [web:6][web:12][web:9][web:2]
 */
export default function NotFoundScreen() {
	const router = useRouter();

	const handleBackToHome = useCallback(() => {
		router.push("/"); // Go to your app's home
	}, [router]);

	return (
		<SafeAreaView className="flex-1 bg-background">
			<View className="flex-1 items-center justify-center px-6">
				<View className="w-full max-w-md items-center">
					{/* Big 404 heading with strong contrast, avoids extreme font sizes on small screens */}
					<Text
						accessibilityRole="header"
						className="text-9xl  font-extrabold tracking-tight  mb-2 text-primary-950"
					>
						404
					</Text>

					<Text className="text-lg font-bold text-foreground/90 text-center mb-3">
						Something’s missing
					</Text>

					<Text className="text-sm text-muted-foreground text-center">
						The page you’re looking for doesn’t exist.
					</Text>

					<View className="flex-row gap-3 mt-6">
						<Button
							variant="default"
							size="lg"
							className="rounded-xl px-5 py-2.5"
							onPress={handleBackToHome}
							android_ripple={{ color: "#1e40af" }}
						>
							<Text className="text-primary-foreground font-medium ">
								Back to Home
							</Text>
						</Button>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
