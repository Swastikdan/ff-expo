import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";
import { Stack, Link } from "expo-router";
import { useState, memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "@/components/search-bar";
import {
	PopularMovies as _PopularMovies,
	PopularTv as _PopularTv,
	TopRatedMovies as _TopRatedMovies,
	TopRatedTv as _TopRatedTv,
	TrendingDayMovies as _TrendingDayMovies,
	TrendingWeekMovies as _TrendingWeekMovies,
} from "@/components/homepage-media";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PopularMovies = memo(_PopularMovies);
const PopularTv = memo(_PopularTv);
const TopRatedMovies = memo(_TopRatedMovies);
const TopRatedTv = memo(_TopRatedTv);
const TrendingDayMovies = memo(_TrendingDayMovies);
const TrendingWeekMovies = memo(_TrendingWeekMovies);

type TrendingTab = "trending_day" | "trending_week";
type PopularTab = "popular_movie" | "popular_tv";
type TopRatedTab = "top_rated_movies" | "top_rated_tv";

function SectionTabs<T extends string>({
	title,
	value,
	onChange,
	options,
	render,
}: {
	title: string;
	value: T;
	onChange: (v: T) => void;
	options: { label: string; value: T }[];
	render: Record<T, React.ReactNode>;
}) {
	return (
		<Tabs value={value} onValueChange={(v) => onChange(v as T)}>
			<View className="flex gap-5">
				<Text className="font-bold text-2xl text-start">{title}</Text>
				<TabsList className="h-9.5 rounded-lg bg-transparent border-[2px] border-border dark:data-[state=active]:border-transparent">
					{options.map((opt) => (
						<TabsTrigger
							key={opt.value}
							value={opt.value}
							className="h-8 px-5 data-[state=active]:bg-secondary data-[state=active]:shadow-none dark:data-[state=active]:bg-secondary"
						>
							<Text numberOfLines={1}>{opt.label}</Text>
						</TabsTrigger>
					))}
				</TabsList>
			</View>
			{options.map((opt) => (
				<TabsContent key={opt.value} value={opt.value}>
					{render[opt.value]}
				</TabsContent>
			))}
		</Tabs>
	);
}

export default function HomePage() {
	const [trendingTab, setTrendingTab] = useState<TrendingTab>("trending_day");
	const [popularTab, setPopularTab] = useState<PopularTab>("popular_movie");
	const [topRatedTab, setTopRatedTab] =
		useState<TopRatedTab>("top_rated_movies");

	return (
		<ScrollView
			contentContainerStyle={{ paddingBottom: 24 }}
			keyboardShouldPersistTaps="handled"
		>
			<SafeAreaView className="w-full">
				<View className="p-5 mx-auto items-center">
					<View className="pb-5">
						<Text className="text-2xl text-center text-primary-950 font-bold">
							Welcome to
							<Text className="text-blue-500 text-2xl text-center">{` Film Fanatic`}</Text>
						</Text>
						{/* fixed typo: text-promary-950 -> text-primary-950 */}
						<Text className="mb-3 text-[10px] text-primary-950 text-center">
							Millions of movies, TV shows, and people to discover.
						</Text>
					</View>
					<SearchBar isOnHomePage />
				</View>

				<View className="mx-auto w-full max-w-screen-xl px-5 py-5 md:pt-10">
					<View className="w-full flex-col gap-10">
						<SectionTabs<TrendingTab>
							title="Trending"
							value={trendingTab}
							onChange={setTrendingTab}
							options={[
								{ label: "Today", value: "trending_day" },
								{ label: "This Week", value: "trending_week" },
							]}
							render={{
								trending_day: <TrendingDayMovies />,
								trending_week: <TrendingWeekMovies />,
							}}
						/>

						<SectionTabs<PopularTab>
							title={`What's Popular`}
							value={popularTab}
							onChange={setPopularTab}
							options={[
								{ label: "Theaters", value: "popular_movie" },
								{ label: "On TV", value: "popular_tv" },
							]}
							render={{
								popular_movie: <PopularMovies />,
								popular_tv: <PopularTv />,
							}}
						/>

						<SectionTabs<TopRatedTab>
							title="Top Rated"
							value={topRatedTab}
							onChange={setTopRatedTab}
							options={[
								{ label: "Movies", value: "top_rated_movies" },
								{ label: "TV Shows", value: "top_rated_tv" },
							]}
							render={{
								top_rated_movies: <TopRatedMovies />,
								top_rated_tv: <TopRatedTv />,
							}}
						/>
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
}
