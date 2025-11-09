import { NAV_THEME } from "@/lib/theme";
import { ThemeProvider } from "@react-navigation/native";

import { store } from "@/store/store";
import {
	QueryClient as TanStackQueryClient,
	QueryClientProvider as TanStackQueryClientProvider,
} from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

const queryClient = new TanStackQueryClient({
	defaultOptions: {
		queries: {
			staleTime: 24 * 60 * 60 * 1000,
			gcTime: 60 * 60 * 1000,
			retry: 0,
		},
	},
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const theme = NAV_THEME["light"];
	return (
		<ThemeProvider value={theme}>
			<ReduxProvider store={store}>
				<TanStackQueryClientProvider client={queryClient}>
					<SafeAreaProvider>{children}</SafeAreaProvider>
				</TanStackQueryClientProvider>
			</ReduxProvider>
		</ThemeProvider>
	);
};
