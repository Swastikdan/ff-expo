import { IMAGE_PREFIX } from "@/constants";
import { formatMediaTitle } from "@/lib/utils";
import { View } from "react-native";
import { Link } from "expo-router";
import { Star } from "lucide-react-native";
import { Image } from "expo-image";
import { Badge } from "./ui/badge";
import { Icon } from "./ui/icon";
import { Text } from "./ui/text";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface BaseCardProps {
	id: number;
	className?: string;
}

interface MediaCardSpecificProps extends BaseCardProps {
	card_type: "horizontal" | "vertical";
	title: string;
	rating: number;
	image?: string;
	poster_path: string;
	media_type: "movie" | "tv";
	release_date: string | null;
	known_for_department?: string;
	is_on_watchlist_page?: boolean;
	is_on_homepage?: boolean;
}

interface PersonCardSpecificProps extends BaseCardProps {
	card_type: "person";
	name: string;
	profile_path: string;
	known_for_department: string;
}

export type CardProps = MediaCardSpecificProps | PersonCardSpecificProps;

export interface MediaCardSkeletonProps {
	card_type?: "horizontal" | "vertical" | "person";
	className?: string;
}

const MediaCard = (props: CardProps) => {
	if (props.card_type === "horizontal") {
		return <HorizontalCard {...props} />;
	}
	// if (props.card_type === "vertical") {
	// 	return <VerticalCard {...props} />;
	// }
	// if (props.card_type === "person") {
	// 	return <PersonCard {...props} />;
	// }
};

const HorizontalCard = (props: MediaCardSpecificProps) => {
	const {
		title,
		rating,
		image,
		id,
		poster_path,
		media_type,
		release_date,
		is_on_homepage,
		is_on_watchlist_page,
	} = props;

	const formattedTitle = formatMediaTitle.encode(title);
	const formattedReleaseDate = release_date
		? new Date(release_date).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
			})
		: "";
	const imageUrl = `${IMAGE_PREFIX.SD_POSTER}${image}`;

	return (
		<Card className={cn("w-[160px] h-[280px] py-2 rounded-2xl")}>
			<Link
				href={`/${media_type}/${id}/${formattedTitle}`}
				className="block h-min w-full rounded-2xl "
			>
				<CardContent className="px-3 items-center justify-center">
					<View className="flex flex-row items-center gap-2 relative">
						<Image
							alt={title}
							className="rounded-xl bg-accent/40 "
							source={imageUrl}
							contentFit="cover"
							transition={500}
							cachePolicy="memory-disk"
							style={{
								height: 220,
								width: 140,
								borderRadius: 12,
								backgroundColor: "gray",
							}}
						/>
						<View className="absolute right-2 bottom-2 z-20 items-center flex-row gap-2">
							<Badge className="rounded-md px-1" variant="secondary">
								<Text className="font-normal uppercase text-xs">
									{media_type}
								</Text>
							</Badge>
							<Badge
								variant="secondary"
								className="rounded-md font-normal text-sm px-1"
							>
								{rating > 0.0 ? (
									<>
										<Icon
											as={Star}
											size={16}
											className="fill-yellow-400 text-yellow-400"
										/>
										<Text className="font-normal text-xs ">
											{rating.toFixed(1)}
										</Text>
									</>
								) : (
									<Text>"NR"</Text>
								)}
							</Badge>
						</View>
					</View>
				</CardContent>
				<CardFooter className="flex flex-col items-start px-3 pt-1">
					<Text
						numberOfLines={1}
						ellipsizeMode="tail"
						className="text-start text-sm font-semibold capitalize"
					>
						{title}
					</Text>
					<Text className="text-start text-xs">{formattedReleaseDate}</Text>
				</CardFooter>
			</Link>
		</Card>
	);
};

const MediaCardSkeleton = (props: MediaCardSkeletonProps) => {
	if (props.card_type === "horizontal") {
		return <Skeleton className="w-[160px] h-[280px] py-2 rounded-2xl" />;
	}
	// if (props.card_type === "vertical") {
	// 	return (
	// 		<View className="h-[224px] w-[296px]">
	// 			<View className="relative h-full w-full space-y-2 rounded-xl bg-transparent p-2">
	// 				<Skeleton className="h-[160px] w-[280px] rounded-xl" />
	// 				<View className="flex w-full flex-col gap-2">
	// 					<Skeleton className="h-4 w-32 rounded-md" />
	// 					<Skeleton className="h-3 w-24 rounded-md" />
	// 				</View>
	// 			</View>
	// 		</View>
	// 	);
	// }

	return (
		<View className="h-32 w-28 space-y-2 md:h-40 md:w-32 p-2">
			<Skeleton className="relative h-24 w-full md:h-32" />
			<View className="flex h-[40px] flex-col gap-2 md:h-[52px]">
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-3 w-16" />
			</View>
		</View>
	);
};

export { MediaCard, MediaCardSkeleton };
