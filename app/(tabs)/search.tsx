import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/search-bar";
import { useAppSelector } from "@/store/hooks";

import { SearchResults } from "@/components/search-results";

export default function SearchScreen() {
	const searchQuery = useAppSelector((state) => state.search.searchQuery);

	return (
		<SafeAreaView className="w-full">
			<View className="p-5 mx-auto items-center">
				<SearchBar />
				<View className="py-5">
					{searchQuery !== "" ? (
						<SearchResults query={searchQuery} />
					) : (
						<Text>Enter a search query</Text>
					)}
				</View>
			</View>
		</SafeAreaView>
	);
}
