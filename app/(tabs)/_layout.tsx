import { Tabs } from "expo-router";
import { HapticTab } from "@/components/haptic-tab";
import {
	HomeIcon,
	SearchIcon,
	LayoutDashboard,
	BookMarkedIcon,
} from "lucide-react-native";
import { Text } from "react-native";
export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarStyle: {
					paddingTop: 8,
					paddingBottom: 0,
					borderTopWidth: 2,
				},
				tabBarLabelStyle: { fontSize: 20 },
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarIcon({ color, size }) {
						return <HomeIcon size={size} color={color} />;
					},
					tabBarLabel: ({ color }) => (
						<Text
							style={{ color }}
							className="text-xs font-semibold"
						>{`Home`}</Text>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					tabBarIcon({ color, size }) {
						return <SearchIcon size={size} color={color} />;
					},
					tabBarLabel: ({ color }) => (
						<Text
							style={{ color }}
							className="text-xs font-semibold"
						>{`Search`}</Text>
					),
				}}
			/>
			<Tabs.Screen
				name="watchlist"
				options={{
					tabBarIcon({ color, size }) {
						return <BookMarkedIcon size={size} color={color} />;
					},
					tabBarLabel: ({ color }) => (
						<Text
							style={{ color }}
							className="text-xs font-semibold"
						>{`Watchlist`}</Text>
					),
				}}
			/>
			<Tabs.Screen
				name="categories"
				options={{
					tabBarIcon({ color, size }) {
						return <LayoutDashboard size={size} color={color} />;
					},
					tabBarLabel: ({ color }) => (
						<Text
							style={{ color }}
							className="text-xs font-semibold"
						>{`Categories`}</Text>
					),
				}}
			/>
		</Tabs>
	);
}
