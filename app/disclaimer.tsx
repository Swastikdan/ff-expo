import { ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DisclaimerScreen() {
	return (
		<SafeAreaView>
			<ScrollView contentContainerStyle={{ padding: 16 }} className="flex-grow">
				<Text className="text-4xl py-5 pb-10 font-bold text-foreground">
					Disclaimer
				</Text>
				<View className="w-full max-w-3xl mx-auto flex flex-col gap-6">
					<Text className="text-base leading-relaxed text-primary">
						This application is a personal project created for demonstration
						purposes only. All movie data and content is provided by third-party
						services (TMDb) and we do not claim ownership of any media or
						intellectual property displayed.
					</Text>

					<Text className="text-base leading-relaxed text-primary">
						We do not store or process any sensitive user data. However, we
						cannot guarantee the security of any information entered into this
						application and users proceed at their own risk.
					</Text>

					<View className="rounded-xl bg-foreground/10 p-5">
						<Text className="mb-3 text-lg font-semibold text-foreground">
							Important Notice
						</Text>
						<Text className="text-base leading-relaxed text-primary">
							This service is provided &quot;as-is&quot; without any warranties,
							express or implied. We accept no liability for any data loss,
							inaccuracies, or damages resulting from the use of this
							application.
						</Text>
					</View>

					<Text className="text-2xl font-bold text-foreground">
						Terms & Conditions
					</Text>

					<View className="space-y-8">
						<View>
							<Text className="mb-3 text-lg font-semibold text-foreground">
								1. Intellectual Property
							</Text>
							<View className="space-y-1 pl-5">
								<Text className="list-disc text-base leading-relaxed text-primary">
									All movie data, images, and related content are property of
									their respective owners.
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									TMDb data is used in accordance with their API terms of
									service.
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									No commercial use of content displayed on this platform is
									permitted.
								</Text>
							</View>
						</View>

						<View>
							<Text className="mb-3 text-lg font-semibold text-foreground">
								2. Limitation of Liability
							</Text>
							<Text className="text-base leading-relaxed text-primary">
								Under no circumstances shall the developers or maintainers of
								this application be liable for:
							</Text>
							<View className="space-y-1 pl-5 mt-2">
								<Text className="list-disc text-base leading-relaxed text-primary">
									Any direct or indirect damages
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									Data loss or corruption
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									Service interruptions or downtime
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									Accuracy of provided information
								</Text>
							</View>
						</View>

						<View>
							<Text className="mb-3 text-lg font-semibold text-foreground">
								3. Third-Party Services
							</Text>
							<Text className="text-base leading-relaxed text-primary">
								This application relies on third-party services including but
								not limited to:
							</Text>
							<View className="space-y-1 pl-5 mt-2">
								<Text className="list-disc text-base leading-relaxed text-primary">
									The Movie Database (TMDb)
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									Next.js/Vercel hosting platform
								</Text>
								<Text className="list-disc text-base leading-relaxed text-primary">
									Other API providers
								</Text>
							</View>
							<Text className="mt-3 text-base leading-relaxed text-primary">
								We are not responsible for the content or reliability of these
								third-party services.
							</Text>
						</View>

						<View className="rounded-xl bg-foreground/10 p-5 mt-3">
							<Text className="mb-3 text-lg font-semibold text-foreground">
								Changes to Terms
							</Text>
							<Text className="text-base leading-relaxed text-primary">
								We reserve the right to modify these terms at any time. Users
								are responsible for regularly reviewing these terms and
								conditions.
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
