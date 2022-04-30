import { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../utils/services/queryClient.service";

export const AppProviders = ({ children }: PropsWithChildren<{}>) => (
    <QueryClientProvider client={queryClient}>
        {children}   
    </QueryClientProvider>
)