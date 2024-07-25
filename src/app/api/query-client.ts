import { QueryClient, type DefaultOptions } from "@tanstack/react-query";

export const queryKeys = {
  zones: {
    list: ["zones"],
  },
} as const;

type QueryKeys = typeof queryKeys;
type QueryKeyCategories = keyof QueryKeys;
type QueryKeySubcategories<T extends QueryKeyCategories> = keyof QueryKeys[T];

export type QueryKey =
  QueryKeys[QueryKeyCategories][QueryKeySubcategories<QueryKeyCategories>];

// first element of the queryKeys array
export type QueryModel = QueryKey[number];

type QueryOptions = NonNullable<DefaultOptions>["queries"];

export const defaultQueryOptions: QueryOptions = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 15 * 60 * 1000, // 15 minutes
  refetchOnWindowFocus: true,
};

export const realTimeQueryOptions: QueryOptions = {
  staleTime: 0,
  gcTime: 60 * 1000, // 1 minute
};

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: defaultQueryOptions,
    },
  });
