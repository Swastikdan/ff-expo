import React, { useCallback } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { SearchIcon, XCircleIcon } from "lucide-react-native";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Icon } from "./ui/icon";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchQuery } from "@/store/slices/search-slice";

interface SearchBarProps {
	isOnHomePage?: boolean;
	placeholder?: string;
	onChange?: (value: string) => void;
}

export function SearchBar({
	isOnHomePage = false,
	placeholder = "👀 What movie, show? Let's find it!",
	onChange,
}: SearchBarProps) {
	const router = useRouter();
	const dispatch = useAppDispatch();

	// Single source of truth
	const value = useAppSelector((s) => s.search.searchQuery) ?? "";

	const handleFocus = useCallback(() => {
		if (isOnHomePage) router.push("/search");
	}, [isOnHomePage, router]);

	const handleChange = useCallback(
		(text: string) => {
			dispatch(setSearchQuery(text));
			onChange?.(text);
		},
		[dispatch, onChange],
	);

	const clearInput = useCallback(() => {
		dispatch(setSearchQuery(""));
		onChange?.("");
	}, [dispatch, onChange]);

	return (
		<View className="relative w-full">
			<Label htmlFor="search" className="sr-only">
				Search
			</Label>

			<Input
				className="min-w-[90vw] rounded-xl h-12 ps-12 pr-10"
				value={value}
				placeholder={placeholder}
				onChangeText={handleChange}
				onFocus={handleFocus}
				accessibilityLabel="Search"
			/>

			<Icon
				as={SearchIcon}
				size={24}
				className="pointer-events-none absolute inset-y-3 start-3 flex items-center ps-4 peer-disabled:opacity-50 text-primary/70"
			/>

			{value.length > 0 && (
				<Icon
					as={XCircleIcon}
					size={24}
					className="absolute inset-y-3 end-3 z-20 flex cursor-pointer items-center pr-4 hover:opacity-70 active:scale-90"
					onPress={clearInput}
					accessibilityLabel="Clear search"
				/>
			)}
		</View>
	);
}
