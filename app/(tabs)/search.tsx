import {
	ActivityIndicator,
	ScrollView,
	Text,
	View,
	FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/search-bar";
import { useDebounce } from "use-debounce";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchQuery } from "@/store/slices/search-slice";
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { MAX_PAGINATION_LIMIT } from "@/constants";
import { getSearchResult } from "@/lib/queries";
import type { MediaType, SearchResultsEntity } from "@/types";
import { SearchResults } from "@/components/search-results";

export default function SearchScreen() {
	const searchQuery = useAppSelector((state) => state.search.searchQuery);
	const searchPageNumber = useAppSelector(
		(state) => state.search.searchPageNumber,
	);

	return (
		<SafeAreaView className="w-full">
			<View className="p-5 mx-auto items-center">
				<SearchBar />
				<View className="py-5">
					{searchQuery !== "" ? (
						<SearchResults query={searchQuery} page={searchPageNumber} />
					) : (
						<Text>Enter a search query</Text>
					)}
				</View>
			</View>
		</SafeAreaView>
	);
}
