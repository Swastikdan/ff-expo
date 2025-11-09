import { Text } from "@/components/ui/text";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FlatList, View } from "react-native";
import { getSearchResult } from "@/lib/queries";
import { MAX_PAGINATION_LIMIT } from "@/constants";
import { MediaCard, MediaCardSkeleton } from "./media-card";

type MediaType = "movie" | "tv";

export function SearchResults({ query }: { query: string }) {
	const {
		data,
		error,
		isLoading,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery({
		queryKey: ["search", query],
		queryFn: ({ pageParam }) => getSearchResult(query, pageParam),
		initialPageParam: 1,
		enabled: !!query,
		getNextPageParam: (lastPage) => {
			const totalPages = Math.min(lastPage.total_pages, MAX_PAGINATION_LIMIT);
			const next = lastPage.page + 1;
			return next <= totalPages ? next : undefined;
		},
		staleTime: 1000 * 60 * 60 * 24,
		gcTime: 1000 * 60 * 60 * 24,
		retry: 2,
		refetchOnWindowFocus: false,
	});

	const numColumns = 2;
	const flatResults = data?.pages?.flatMap((p) => p?.results ?? []) ?? []; //

	const handleEndReached = () => {
		if (hasNextPage && !isFetchingNextPage) fetchNextPage();
	};

	// Initial state: only show skeleton grid if absolutely no data yet
	if (isLoading && flatResults.length === 0) {
		return <SearchResultsSkeleton numColumns={numColumns} />;
	}

	if (error) return <Text>{String(error)}</Text>; // [web:36]
	if (!flatResults.length && !isLoading) return <Text>No results found</Text>; // [web:36]

	return (
		<FlatList
			data={flatResults}
			style={{
				paddingBottom: 40,
			}}
			key={`grid-${numColumns}`}
			numColumns={numColumns}
			horizontal={false}
			renderItem={({ item }) => (
				<View style={{ flexBasis: "50%", maxWidth: "50%" }}>
					<MediaCard
						id={item.id}
						title={item.title ?? item.name ?? "Untitled"}
						rating={item.vote_average ?? 0}
						image={item.poster_path ?? ""}
						poster_path={item.poster_path ?? ""}
						media_type={item.media_type as MediaType}
						release_date={item.first_air_date ?? item.release_date ?? null}
						card_type={"horizontal"}
					/>
				</View>
			)}
			keyExtractor={(item) => String(item.id)}
			columnWrapperStyle={{ gap: 8, paddingHorizontal: 8 }}
			ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
			contentContainerStyle={{ paddingVertical: 8 }}
			removeClippedSubviews
			onEndReached={handleEndReached}
			onEndReachedThreshold={0.7}
			ListFooterComponent={
				isFetchingNextPage ? (
					<SearchResultsSkeleton numColumns={numColumns} />
				) : null
			}
			ListEmptyComponent={null}
		/>
	);
}

const SearchResultsSkeleton = ({ numColumns }: { numColumns: number }) => {
	return (
		<FlatList
			data={Array.from({ length: 12 })}
			key={`grid-${numColumns}`}
			numColumns={numColumns}
			horizontal={false}
			renderItem={({ index }) => (
				<View style={{ flexBasis: "50%", maxWidth: "50%" }}>
					<MediaCardSkeleton key={index} card_type={"horizontal"} />
				</View>
			)}
			keyExtractor={(_, i) => String(i)}
			columnWrapperStyle={{ gap: 8, paddingHorizontal: 8 }}
			ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
			contentContainerStyle={{ paddingVertical: 8 }}
			removeClippedSubviews
		/>
	);
};
